window.onload = function() {

      // Build a system
      const ui = SwaggerUIBundle({
          spec: /*intellij-swagger-spec-start*/{"openapi":"3.0.0","info":{"version":"1.0.0","title":"Search Microservice API","description":"Covers Search Microservice API"},"servers":[{"url":"http://ecsc00a00912.epam.com:8080/public/v1"}],"paths":{"/products":{"post":{"summary":"Sends product data for indexing","description":"Sends product data for indexing","requestBody":{"$ref":"#/components/requestBodies/SendProdutDataRequest"},"responses":{"200":{"$ref":"#/components/responses/SearchIndexResponse"}}}}},"components":{"requestBodies":{"SendProdutDataRequest":{"content":{"application/json":{"schema":{"type":"object","properties":{"id":{"type":"string"},"name":{"type":"string"},"price":{"type":"number"},"categoryId":{"type":"string"},"ingredients":{"type":"array","items":{"type":"string"}}},"required":["id","name","price","categoryId"],"example":{"id":"1002","name":"productName","price":200.0,"categoryId":"156","ingredients":["strawberry","milk","sugar"]}}}}}},"responses":{"SearchIndexResponse":{"description":"OK","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","description":"a flag indicating whether the operation was successful."},"message":{"type":"string","description":"a message describing the outcome of the request handling."}},"required":["success","message"],"example":[{"message":"Search server is down"},{"message":"All the data was indexed"},{"success":true},{"success":false}]}}}}}}}/*intellij-swagger-spec-end*/,
          validatorUrl: null,
          dom_id: '#swagger-ui',
          deepLinking: true,
          presets: [
              SwaggerUIBundle.presets.apis,
              SwaggerUIStandalonePreset
          ],
          plugins: [
              SwaggerUIBundle.plugins.DownloadUrl
          ],
          layout: "StandaloneLayout"
      })

      window.ui = ui
    }