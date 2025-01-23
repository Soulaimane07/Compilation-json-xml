package com.example.demo;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/v1/convert")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"})
public class ConverterController {

    private final ManualXmlToJsonParser xmlToJsonParser = new ManualXmlToJsonParser(); // Custom XML to JSON parser
    private final ManualJsonToXmlParser jsonToXmlParser = new ManualJsonToXmlParser(); // Custom JSON to XML parser

    // Convert XML to JSON using custom parser (supports both file and string input)
    @PostMapping("/xml-to-json")
    public ResponseEntity<String> convertXmlToJson(
            @RequestParam(value = "file", required = false) MultipartFile file,
            @RequestParam(value = "content", required = false) String content) {
        try {
            String xmlContent = file != null ? new String(file.getBytes()) : content;

            if (xmlContent == null || xmlContent.isEmpty()) {
                return ResponseEntity.badRequest().body("No valid XML content provided.");
            }

            String jsonContent = xmlToJsonParser.convertXmlToJson(xmlContent); // Use custom parser
            return ResponseEntity.ok(jsonContent); // Return the JSON string
        } catch (IOException e) {
            return ResponseEntity.badRequest().body("Invalid file: " + e.getMessage());
        }
    }

    // Convert JSON to XML using custom parser (supports both file and string input)
    @PostMapping("/json-to-xml")
    public ResponseEntity<String> convertJsonToXml(
            @RequestParam(value = "file", required = false) MultipartFile file,
            @RequestParam(value = "content", required = false) String content) {
        try {
            String jsonContent = file != null ? new String(file.getBytes()) : content;

            if (jsonContent == null || jsonContent.isEmpty()) {
                return ResponseEntity.badRequest().body("No valid JSON content provided.");
            }

            String xmlContent = jsonToXmlParser.convertJsonToXml(jsonContent); // Convert JSON to XML
            return ResponseEntity.ok(xmlContent);
        } catch (IOException e) {
            return ResponseEntity.badRequest().body("Invalid file: " + e.getMessage());
        }
    }
}
