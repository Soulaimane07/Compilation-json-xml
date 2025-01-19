package com.example.demo;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ManualXmlToJsonParser {

    // Method to convert XML string to JSON manually
    public String convertXmlToJson(String xmlContent) {
        if (xmlContent == null || xmlContent.isEmpty()) {
            return "{}";
        }

        // Parse XML and construct JSON map
        Map<String, Object> jsonMap = parseXmlToJsonRecursive(xmlContent.trim());

        // Convert the map to a JSON string
        return convertMapToJson(jsonMap);
    }

    // Recursive method to process XML and convert to JSON map
    private Map<String, Object> parseXmlToJsonRecursive(String xmlContent) {
        Map<String, Object> jsonMap = new HashMap<>();

        while (xmlContent.contains("<")) {
            // Extract tag name
            int startTagStart = xmlContent.indexOf("<");
            int startTagEnd = xmlContent.indexOf(">");
            String tagName = xmlContent.substring(startTagStart + 1, startTagEnd);

            // Check for closing tag
            int endTagStart = xmlContent.indexOf("</" + tagName + ">");
            if (endTagStart == -1) {
                break; // No matching closing tag found
            }

            // Extract content between tags
            String tagContent = xmlContent.substring(startTagEnd + 1, endTagStart).trim();

            // Remove processed tag
            xmlContent = xmlContent.substring(endTagStart + tagName.length() + 3);

            // Check if content contains nested tags
            Object value;
            if (tagContent.contains("<")) {
                value = parseXmlToJsonRecursive(tagContent);
            } else {
                value = tagContent;
            }

            // Handle multiple tags with the same name (convert to List)
            if (jsonMap.containsKey(tagName)) {
                Object existingValue = jsonMap.get(tagName);
                if (existingValue instanceof List) {
                    ((List<Object>) existingValue).add(value);
                } else {
                    List<Object> newList = new ArrayList<>();
                    newList.add(existingValue);
                    newList.add(value);
                    jsonMap.put(tagName, newList);
                }
            } else {
                jsonMap.put(tagName, value);
            }
        }

        return jsonMap;
    }

    // Convert the Map to JSON-like string (supports nested maps and lists)
    private String convertMapToJson(Map<String, Object> map) {
        StringBuilder jsonBuilder = new StringBuilder();
        jsonBuilder.append("{");

        for (Map.Entry<String, Object> entry : map.entrySet()) {
            jsonBuilder.append("\"").append(entry.getKey()).append("\": ");
            if (entry.getValue() instanceof Map) {
                // Recursive call for nested maps
                jsonBuilder.append(convertMapToJson((Map<String, Object>) entry.getValue()));
            } else if (entry.getValue() instanceof List) {
                // Handle lists
                jsonBuilder.append("[");
                List<Object> list = (List<Object>) entry.getValue();
                for (Object item : list) {
                    if (item instanceof Map) {
                        jsonBuilder.append(convertMapToJson((Map<String, Object>) item));
                    } else {
                        jsonBuilder.append("\"").append(item).append("\"");
                    }
                    jsonBuilder.append(", ");
                }
                if (!list.isEmpty()) {
                    jsonBuilder.setLength(jsonBuilder.length() - 2); // Remove trailing comma
                }
                jsonBuilder.append("]");
            } else {
                // Add value as a string
                jsonBuilder.append("\"").append(entry.getValue()).append("\"");
            }
            jsonBuilder.append(", ");
        }

        // Remove trailing comma
        if (jsonBuilder.length() > 1) {
            jsonBuilder.setLength(jsonBuilder.length() - 2);
        }

        jsonBuilder.append("}");
        return jsonBuilder.toString();
    }
}
