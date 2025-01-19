package com.example.demo;

import java.util.HashMap;
import java.util.Map;
import java.util.List;
import java.util.ArrayList;

public class ManualJsonToXmlParser {

    // Method to convert JSON string to XML manually
    public String convertJsonToXml(String jsonContent) {
        if (jsonContent == null || jsonContent.isEmpty()) {
            return "<root></root>";
        }

        // Convert JSON string to Map (this needs to handle nested objects)
        Map<String, Object> jsonMap = parseJsonToMap(jsonContent); // Improved parsing

        return convertMapToXml(jsonMap, "root"); // Convert Map to XML string
    }

    // Convert JSON string into a Map, including nested objects and arrays
    private Map<String, Object> parseJsonToMap(String jsonContent) {
        Map<String, Object> map = new HashMap<>();

        // Remove outer curly braces
        jsonContent = jsonContent.trim();
        if (jsonContent.startsWith("{") && jsonContent.endsWith("}")) {
            jsonContent = jsonContent.substring(1, jsonContent.length() - 1);
        }

        // Split JSON content into key-value pairs
        int braceCount = 0;
        int bracketCount = 0;
        StringBuilder pairBuilder = new StringBuilder();
        for (char c : jsonContent.toCharArray()) {
            if (c == '{') braceCount++;
            if (c == '}') braceCount--;
            if (c == '[') bracketCount++;
            if (c == ']') bracketCount--;
            if (c == ',' && braceCount == 0 && bracketCount == 0) {
                processKeyValuePair(pairBuilder.toString(), map);
                pairBuilder.setLength(0);
            } else {
                pairBuilder.append(c);
            }
        }
        if (pairBuilder.length() > 0) {
            processKeyValuePair(pairBuilder.toString(), map);
        }

        return map;
    }

    // Helper method to process key-value pairs
    private void processKeyValuePair(String pair, Map<String, Object> map) {
        String[] keyValue = pair.split(":", 2);
        if (keyValue.length == 2) {
            String key = keyValue[0].trim().replace("\"", "");
            String value = keyValue[1].trim();

            // Handle nested objects and arrays
            if (value.startsWith("{") && value.endsWith("}")) {
                map.put(key, parseJsonToMap(value));
            } else if (value.startsWith("[") && value.endsWith("]")) {
                map.put(key, parseJsonArray(value));
            } else {
                map.put(key, value.replace("\"", ""));
            }
        }
    }

    // Convert JSON array string into a List
    private List<Object> parseJsonArray(String jsonArrayContent) {
        List<Object> list = new ArrayList<>();
        jsonArrayContent = jsonArrayContent.trim();
        if (jsonArrayContent.startsWith("[") && jsonArrayContent.endsWith("]")) {
            jsonArrayContent = jsonArrayContent.substring(1, jsonArrayContent.length() - 1);
        }

        int braceCount = 0;
        int bracketCount = 0;
        StringBuilder itemBuilder = new StringBuilder();
        for (char c : jsonArrayContent.toCharArray()) {
            if (c == '{') braceCount++;
            if (c == '}') braceCount--;
            if (c == '[') bracketCount++;
            if (c == ']') bracketCount--;
            if (c == ',' && braceCount == 0 && bracketCount == 0) {
                processArrayItem(itemBuilder.toString(), list);
                itemBuilder.setLength(0);
            } else {
                itemBuilder.append(c);
            }
        }
        if (itemBuilder.length() > 0) {
            processArrayItem(itemBuilder.toString(), list);
        }

        return list;
    }

    // Helper method to process array items
    private void processArrayItem(String item, List<Object> list) {
        item = item.trim();
        if (item.startsWith("{") && item.endsWith("}")) {
            list.add(parseJsonToMap(item));
        } else {
            list.add(item.replace("\"", ""));
        }
    }

    // Method to manually create XML from a Map
    private String convertMapToXml(Map<String, Object> jsonMap, String rootElement) {
        StringBuilder xmlBuilder = new StringBuilder();
        xmlBuilder.append("<").append(rootElement).append(">");

        for (Map.Entry<String, Object> entry : jsonMap.entrySet()) {
            String key = entry.getKey();
            Object value = entry.getValue();

            if (value instanceof Map) {
                // Recursively convert nested objects
                xmlBuilder.append(convertMapToXml((Map<String, Object>) value, key));
            } else if (value instanceof List) {
                // Convert arrays
                xmlBuilder.append(convertListToXml((List<Object>) value, key));
            } else {
                // Add simple key-value pairs
                xmlBuilder.append("<").append(key).append(">")
                        .append(value)
                        .append("</").append(key).append(">");
            }
        }

        xmlBuilder.append("</").append(rootElement).append(">");
        return xmlBuilder.toString();
    }

    // Method to convert a List to XML
    private String convertListToXml(List<Object> list, String elementName) {
        StringBuilder xmlBuilder = new StringBuilder();
        for (Object item : list) {
            if (item instanceof Map) {
                xmlBuilder.append(convertMapToXml((Map<String, Object>) item, elementName));
            } else {
                xmlBuilder.append("<").append(elementName).append(">")
                        .append(item)
                        .append("</").append(elementName).append(">");
            }
        }
        return xmlBuilder.toString();
    }
}
