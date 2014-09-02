define({ api: [
  {
    "type": "",
    "url": "{}",
    "title": "Authentication",
    "name": "Authenticate",
    "group": "API",
    "description": "<p>The authentication to the api is using &quot;Basic Auth&quot;. So just put username/password inside each request to be authenticated.<br/>The api try to be as REST as possible. The aim is to be RESTful. It means that there are no states (sessions) on server side. Each request is unique and has to holdeverything needed like user username/credential.</p>",
    "success": {
      "fields": {
        "Basic Auth parameters": [
          {
            "group": "authRequest",
            "field": "username",
            "optional": false,
            "description": ""
          },
          {
            "group": "authRequest",
            "field": "password",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "sources/API.js"
  },
  {
    "type": "",
    "url": "{}",
    "title": "Header parameters",
    "name": "HeaderParams",
    "group": "API",
    "description": "<p>The header of all your request to the API has to / may include some useful parameters.</p>",
    "success": {
      "fields": {
        "Header request parameters": [
          {
            "group": "headerRequest",
            "type": "String",
            "field": "Accept-Language",
            "defaultValue": "Locale du navigateur",
            "optional": true,
            "description": "<p>Langue de retour demandée. Exemple : fr-FR.</p>"
          },
          {
            "group": "headerRequest",
            "type": "String",
            "field": "auth_api_key",
            "optional": true,
            "description": "<p>Use your api key with email to be authenticate. If no api key are provided then you act as a guest.</p>"
          },
          {
            "group": "headerRequest",
            "type": "String",
            "field": "auth_email",
            "optional": true,
            "description": "<p>Use you email with api key to be authenticate. If no email are provided then you act as a guest.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Use example:",
          "content": "Request Header:\n---------------\nGET /api/events HTTP/1.1\nHost: 109.31.47.142:3000/api:1337\nAccept-Language: fr-FR\n...\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Header response parameters": [
          {
            "group": "headerResponse",
            "type": "String",
            "field": "test",
            "optional": false,
            "description": "<p>qsd</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response sample:",
          "content": "Response Header:\n---------------\n...\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/API.js"
  },
  {
    "type": "",
    "url": "{}",
    "title": "Summary",
    "name": "Summary",
    "group": "API",
    "groupDescription": "<p>Welcome to the redh00d API also called Web Service. This documentation will list all the available methods to interract with database.<br/>Please read all section to understand. If you get an error response you can refer to the error section.<br/><b>The web service is now under development, means that some method may have changed or may not be correctly functionnal.</b></p><p>",
    "description": "<p>HTTP Status Code Summary:</b>   <br/><b>200 OK</b> - Everything worked as expected.   <br/><b>400 Bad Request</b> - Often missing a required parameter. The client SHOULD NOT repeat the request without modifications.   <br/><b>401 Unauthorized</b> - No valid API key provided.   <br/><b>402 Request Failed</b> - Parameters were valid but request failed.   <br/><b>403 Forbidden</b> - The server understood the request, but is refusing to fulfill it. Authorization will not help and the request SHOULD NOT be repeated.   <br/><b>405 Method not allowed</b> - Used to indicate that the requested URL exists, but the requested HTTP method is not applicable. For example, POST /users/12345 where the API doesn&#39;t support creation of resources this way (with a provided ID).   <br/><b>404 Not Found</b> - The requested item doesn&#39;t exist.   <br/><b>409 Conflict</b> - Whenever a resource conflict would be caused by fulfilling the request. Duplicate entries, such as trying to create two customers with the same information, and deleting root objects when cascade-delete is not supported are a couple of examples.   <br/><b>500, 502, 503, 504 Server errors</b> - any general error on the system.</p></p><p><hr/></p><p>   <b>Password salt:</b> MojoTime   <br/>Put this salt at the end of the clear password and then hash with md5.</p>",
    "version": "0.0.0",
    "filename": "sources/API.js"
  },
  {
    "type": "get",
    "url": "/dev/db",
    "title": "Display some database info",
    "name": "displayDB",
    "group": "Dev",
    "description": "<p>Display some database info</p>",
    "examples": [
      {
        "title": "Use example",
        "content": "get http://109.31.47.142:3000/api/dev/db\n"
      }
    ],
    "version": "0.0.0",
    "filename": "sources/Development.js"
  },
  {
    "type": "get",
    "url": "/dev/logs",
    "title": "Display logs",
    "name": "displayLogs",
    "group": "Dev",
    "groupDescription": "<p>Documentation relative to dev only purpose. This part is always on working so some method might not be correct or available.<br/>Moreover these methods do not follow REST principle, it&#39;s just for development purpose.</p>",
    "description": "<p>Display logs</p>",
    "examples": [
      {
        "title": "Use example",
        "content": "get http://109.31.47.142:3000/api/dev/logs\n"
      }
    ],
    "version": "0.0.0",
    "filename": "sources/Development.js"
  },
  {
    "type": "post",
    "url": "/dev/db",
    "title": "Initialize database",
    "name": "initDB",
    "group": "Dev",
    "description": "<p>Initialize some basic necessary entries in database</p>",
    "examples": [
      {
        "title": "Use example",
        "content": "post http://109.31.47.142:3000/api/dev/db\n"
      }
    ],
    "version": "0.0.0",
    "filename": "sources/Development.js"
  },
  {
    "type": "get",
    "url": "/dev/delete-logs",
    "title": "Reset logs",
    "name": "resetLogs",
    "group": "Dev",
    "description": "<p>Reset logs</p>",
    "examples": [
      {
        "title": "Use example",
        "content": "get http://109.31.47.142:3000/api/dev/delete-logs\n"
      }
    ],
    "version": "0.0.0",
    "filename": "sources/Development.js"
  },
  {
    "type": "",
    "url": "{}",
    "title": "Errors codes",
    "name": "ErroCode",
    "group": "Errors",
    "description": "<p>redh00d use many way to tell whether an error occurs and what was the error. The most reliable and trustable way is the error code. Errors codes are fixed and you can only manage with them to treat errors on customer side. Just read the code and display the messages you want.</p>",
    "header": {
      "fields": {
        "Codes detailed.": [
          {
            "group": "Errors",
            "type": "String",
            "field": "code",
            "optional": false,
            "description": ""
          },
          {
            "group": "Errors",
            "type": "String",
            "field": "code.resourceNotFound",
            "optional": false,
            "description": "<p>La ressource recherchée n&#39;a pas été trouvée.</p>"
          },
          {
            "group": "Errors",
            "type": "String",
            "field": "code.modelNotFound",
            "optional": false,
            "description": "<p>Le model / classe recherché(e) n&#39;a pas été trouvé(e).</p>"
          },
          {
            "group": "Errors",
            "type": "String",
            "field": "code.pageNotFound",
            "optional": false,
            "description": "<p>La page demandée n&#39;a pas été trouvée.</p>"
          },
          {
            "group": "Errors",
            "type": "String",
            "field": "code.dbUnavailable",
            "optional": false,
            "description": "<p>.</p>"
          },
          {
            "group": "Errors",
            "type": "String",
            "field": "code.noAccessRights",
            "optional": false,
            "description": "<p>.</p>"
          },
          {
            "group": "Errors",
            "type": "String",
            "field": "code.emailArleadyTaken",
            "optional": false,
            "description": "<p>.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "sources/Error.js"
  },
  {
    "type": "",
    "url": "{}",
    "title": "Errors responses",
    "name": "ErrorResponse",
    "group": "Errors",
    "description": "<p>redh00d uses conventional HTTP response codes to indicate success or failure of an API request.<br/>In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error<br/>that resulted from the provided information (e.g. a required parameter was missing, a charge failed, etc.), and<br/>codes in the 5xx range indicate an error with redh00d servers.</p>",
    "error": {
      "fields": {
        "Response attributes": [
          {
            "group": "errorResponse",
            "type": "String",
            "field": "message",
            "optional": false,
            "description": "<p>Error message.</p>"
          },
          {
            "group": "errorResponse",
            "type": "String",
            "field": "description",
            "optional": true,
            "description": "<p>More detailed error message.</p>"
          },
          {
            "group": "errorResponse",
            "type": "String",
            "field": "code",
            "optional": false,
            "description": "<p>Error code (Check the section above).</p>"
          },
          {
            "group": "errorResponse",
            "type": "Object[]",
            "field": "params",
            "optional": true,
            "description": "<p>The parameters the error relates to if the error is parameter-specific.</p>"
          },
          {
            "group": "errorResponse",
            "type": "Object[]",
            "field": "params.field",
            "optional": false,
            "description": "<p>The field name relatives to error.</p>"
          },
          {
            "group": "errorResponse",
            "type": "String",
            "field": "params.field.code",
            "optional": false,
            "description": "<p>The code error.</p>"
          },
          {
            "group": "errorResponse",
            "type": "String",
            "field": "params.field.message",
            "optional": false,
            "description": ""
          },
          {
            "group": "errorResponse",
            "type": "String",
            "field": "params.field.description",
            "optional": true,
            "description": ""
          },
          {
            "group": "errorResponse",
            "type": "String",
            "field": "params.field.value",
            "optional": true,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error (400 Bad request) response sample (case of parameters validation failed):",
          "content": "   HTTP/1.1 400 BAD REQUEST\n   {\n     \"message\": \"The requested parameters are not correct\",\n     \"code\": \"invalidParams\"\n     \"params\": [\n        \"field1\": [\n            {\n                \"message\": \"This field should contain at least 4 characters\",\n                \"description\": \"This field should contain at least 4 characters motherfucker !!!\",\n                \"code\": \"fieldTooShort\"\n                \"value\": \"foo\"\n            }\n        ],\n        ...\n     ],\n   }\n"
        },
        {
          "title": "Error (404 Not Found) response sample:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"message\": \"This user doesn't exist\",\n     \"code\": \"modelNotFound\"\n   }\n"
        },
        {
          "title": "Error (403 Forbidden Error) response sample:",
          "content": "   HTTP/1.1 403 Forbidden Error\n   {\n     \"message\": \"You do not have enough rights to access this resource\",\n     \"code\": \"noAccessRights\"\n   }\n"
        },
        {
          "title": "Error (409 Conflict Error) response sample:",
          "content": "   HTTP/1.1 409 Conflict Error\n   {\n     \"message\": \"Email already taken\",\n     \"description\": \"foo\",\n     \"code\": \"emailArleadyTaken\"\n   }\n"
        },
        {
          "title": "Error (500 Serveur Error) response sample:",
          "content": "   HTTP/1.1 500 Serveur Error\n   {\n     \"message\": \"Database unavailable\",\n     \"code\": \"dbUnavailable\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Error.js"
  },
  {
    "type": "post",
    "url": "/users/:id/events",
    "title": "Create an event",
    "name": "CreateEvent",
    "group": "Events",
    "permission": {
      "name": "authenticated",
      "title": "Authentication requiered",
      "description": ""
    },
    "description": "<p>Create an event which is retrieve if creation was a success.<br/><b>Throw error:</b> 400.</p>",
    "parameter": {
      "fields": {
        "Parameters (Form Data)": [
          {
            "group": "dataParam",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": ""
          },
          {
            "group": "dataParam",
            "type": "String",
            "field": "description",
            "optional": true,
            "description": ""
          },
          {
            "group": "dataParam",
            "type": "String",
            "field": "place",
            "optional": true,
            "description": ""
          },
          {
            "group": "dataParam",
            "type": "String",
            "field": "date",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "post http://109.31.47.142:3000/api/events\nform-data: name=MyEvent&date=2014-12-24\n"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error (400 Bad request) response sample (case of parameters validation failed):",
          "content": "   HTTP/1.1 400 BAD REQUEST\n   {\n     \"message\": \"The requested parameters are not correct\",\n     \"code\": \"invalidParams\"\n     \"params\": [\n        \"field1\": [\n            {\n                \"message\": \"This field should contain at least 4 characters\",\n                \"description\": \"This field should contain at least 4 characters motherfucker !!!\",\n                \"code\": \"fieldTooShort\"\n                \"value\": \"foo\"\n            }\n        ],\n        ...\n     ],\n   }\n"
        }
      ]
    },
    "success": {
      "fields": {
        "Success (201 Created) response parameters": [
          {
            "group": "201",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>The created object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (201 Created) response sample:",
          "content": "HTTP/1.1 201 Created\n{\n   \"object\": {\n       \"field1\": \"Foo\",\n       \"field2\": \"Bar\",\n       ...\n   },\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Event.js"
  },
  {
    "type": "post",
    "url": "/events/:id/invitations",
    "title": "Create an event invitation",
    "name": "CreateEventInvitation",
    "group": "Events",
    "permission": "authenticated author",
    "description": "<p>Create one event invitation.<br/><b>Throw error:</b> 400.</p>",
    "parameter": {
      "fields": {
        "Parameters (URL)": [
          {
            "group": "urlParam",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Event&#39;s ID</p>"
          }
        ],
        "Parameters (Form Data)": [
          {
            "group": "dataParam",
            "type": "Number",
            "field": "target_id",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "post http://109.31.47.142:3000/api/events/15/invitations\nform-data: target_id=36\n"
      }
    ],
    "success": {
      "fields": {
        "Success (201 Created) response parameters": [
          {
            "group": "201",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>The created object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (201 Created) response sample:",
          "content": "HTTP/1.1 201 Created\n{\n   \"object\": {\n       \"field1\": \"Foo\",\n       \"field2\": \"Bar\",\n       ...\n   },\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Event.js"
  },
  {
    "type": "delete",
    "url": "/users/:id/events/:id",
    "title": "Delete an Event",
    "name": "DeleteEvent",
    "group": "Events",
    "permission": "authenticated eventOwner",
    "description": "<p>Delete an event<br/><b>Throw error:</b> 404.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Event&#39;s ID</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "delete http://109.31.47.142:3000/api/events/15\n"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success (204 No content) response sample:",
          "content": "HTTP/1.1 204 No content\n{\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Event.js"
  },
  {
    "type": "delete",
    "url": "/events/:idEvent/invitations/:idInvitation",
    "title": "Delete an event invitation",
    "name": "DeleteEventInvitation",
    "group": "Events",
    "permission": {
      "name": "authenticated",
      "title": "Authentication requiered",
      "description": ""
    },
    "description": "<p>Delete an invitation<br/><b>Throw error:</b> 404.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "idEvent",
            "optional": false,
            "description": "<p>Event&#39;s ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "idInvitation",
            "optional": false,
            "description": "<p>Invitation&#39;s ID</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "delete http://109.31.47.142:3000/api/events/5/invitations/10\n"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success (204 No content) response sample:",
          "content": "HTTP/1.1 204 No content\n{\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Event.js"
  },
  {
    "type": "delete",
    "url": "/events/:id/members/:id",
    "title": "Delete an event member",
    "name": "DeleteEventMember",
    "group": "Events",
    "version": "0.0.0",
    "filename": "sources/Event.js"
  },
  {
    "type": "delete",
    "url": "/events/:id_event/products/:id_product",
    "title": "Delete an event product",
    "name": "DeleteEventProduct",
    "group": "Events",
    "permission": {
      "name": "authenticated",
      "title": "Authentication requiered",
      "description": ""
    },
    "description": "<p>Delete an event product.<br/><b>Throw error:</b></p>",
    "examples": [
      {
        "title": "Use example",
        "content": "delete http://109.31.47.142:3000/api/events/15/products/10\n"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success (204 No content) response sample:",
          "content": "HTTP/1.1 204 No content\n{\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Event.js"
  },
  {
    "type": "delete",
    "url": "/events/:id_event/products/:id_product",
    "title": "Delete an event product",
    "name": "DeleteEventProduct",
    "group": "Events",
    "description": "<p>Delete the link between an event and a product. The product itself is not removed.<br/><b>Throw error:</b></p>",
    "permission": {
      "name": "authenticated",
      "title": "Authentication requiered",
      "description": ""
    },
    "examples": [
      {
        "title": "Use example",
        "content": "delete http://109.31.47.142:3000/api/events/15/products/10\n"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success (204 No content) response sample:",
          "content": "HTTP/1.1 204 No content\n{\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Event.js"
  },
  {
    "type": "get",
    "url": "/events/:id",
    "title": "Find an event",
    "name": "FindEvent",
    "group": "Events",
    "groupDescription": "<p>API corresponding to Event. Everything here is related to events. You canretrieves users or products but they are from events and the resource name is different. For example users are members.</p>",
    "description": "<p>Find an event by its ID<br/><b style=\"color:green;\">Throw valid response:</b> 200.<br/><b style=\"color:red;\">Throw error response:</b> 401, 403, 404.</p>",
    "permission": "user admin",
    "parameter": {
      "fields": {
        "Parameters (URL)": [
          {
            "group": "urlParam",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Event ID.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "get http://109.31.47.142:3000/api/events/15\n"
      }
    ],
    "success": {
      "fields": {
        "Success (200 OK) response parameters": [
          {
            "group": "200",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>Requested object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (200 OK) response sample:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"object\": {\n        \"field1\": \"Foo\",\n        \"field2\": \"Bar\",\n        ...\n     },\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Event.js"
  },
  {
    "type": "post",
    "url": "/events/:id_event/invitations/:id_invitation",
    "title": "Find an event invitation",
    "name": "FindEventInvitation",
    "group": "Events",
    "permission": "authenticated author",
    "description": "<p>Find and event invitation.<br/><b>Throw error:</b> 404.</p>",
    "parameter": {
      "fields": {
        "Parameters (URL)": [
          {
            "group": "urlParam",
            "type": "Number",
            "field": "id_event",
            "optional": false,
            "description": "<p>Event&#39;s ID</p>"
          },
          {
            "group": "urlParam",
            "type": "Number",
            "field": "id_invitation",
            "optional": false,
            "description": "<p>Invitation&#39;s ID</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "post http://109.31.47.142:3000/api/events/15/invitations/15\n"
      }
    ],
    "success": {
      "fields": {
        "Success (200 OK) response parameters": [
          {
            "group": "200",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>Requested object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (200 OK) response sample:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"object\": {\n        \"field1\": \"Foo\",\n        \"field2\": \"Bar\",\n        ...\n     },\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Event.js"
  },
  {
    "type": "post",
    "url": "/events/:id_event/invitations/",
    "title": "Find event invitations",
    "name": "FindEventInvitations",
    "group": "Events",
    "permission": "authenticated author",
    "description": "<p>Find event invitations.<br/><b>Throw error:</b> 404.</p>",
    "parameter": {
      "fields": {
        "Parameters (URL)": [
          {
            "group": "urlParam",
            "type": "Number",
            "field": "id_event",
            "optional": false,
            "description": "<p>Event&#39;s ID</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "post http://109.31.47.142:3000/api/events/15/invitations\n"
      }
    ],
    "success": {
      "fields": {
        "Success (200 OK) response parameters": [
          {
            "group": "200",
            "type": "Object[]",
            "field": "objects",
            "optional": false,
            "description": "<p>The list of objects.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (200 OK) response sample:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"objects\": [\n        \"object1\": {\n            \"field1\": \"Foo\",\n            \"field2\": \"Bar\",\n            ...\n        },\n        \"object2\": {\n            \"field1\": \"Foo\",\n            \"field2\": \"Bar\",\n            ...\n        },\n        ...\n     ],\n   }\n"
        },
        {
          "title": "Success (200 OK) response sample (case of empty):",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"objects\": [ ],\n     \"status\": 200\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Event.js"
  },
  {
    "type": "get",
    "url": "/events/:id/members/:id",
    "title": "Find an event member",
    "name": "FindEventMember",
    "group": "Events",
    "version": "0.0.0",
    "filename": "sources/Event.js"
  },
  {
    "type": "get",
    "url": "/events/:id/members",
    "title": "Find event members",
    "name": "FindEventMembers",
    "group": "Events",
    "version": "0.0.0",
    "filename": "sources/Event.js"
  },
  {
    "type": "get",
    "url": "/events/:id_event/products/:id_product",
    "title": "Find an event product",
    "name": "FindEventProduct",
    "group": "Events",
    "description": "<p>Find an event product<br/><b>Throw error:</b> 404</p>",
    "permission": {
      "name": "authenticated",
      "title": "Authentication requiered",
      "description": ""
    },
    "examples": [
      {
        "title": "Use example",
        "content": "get http://109.31.47.142:3000/api/events/15/products/10\n"
      }
    ],
    "success": {
      "fields": {
        "Success (200 OK) response parameters": [
          {
            "group": "200",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>Requested object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (200 OK) response sample:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"object\": {\n        \"field1\": \"Foo\",\n        \"field2\": \"Bar\",\n        ...\n     },\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Event.js"
  },
  {
    "type": "get",
    "url": "/events/:id_event/products",
    "title": "Find event products",
    "name": "FindEventProducts",
    "group": "Events",
    "permission": {
      "name": "authenticated",
      "title": "Authentication requiered",
      "description": ""
    },
    "description": "<p>Find event products<br/><b>Throw error:</b></p>",
    "examples": [
      {
        "title": "Use example",
        "content": "get http://109.31.47.142:3000/api/events/15/products\n"
      }
    ],
    "success": {
      "fields": {
        "Success (200 OK) response parameters": [
          {
            "group": "200",
            "type": "Object[]",
            "field": "objects",
            "optional": false,
            "description": "<p>The list of objects.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (200 OK) response sample:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"objects\": [\n        \"object1\": {\n            \"field1\": \"Foo\",\n            \"field2\": \"Bar\",\n            ...\n        },\n        \"object2\": {\n            \"field1\": \"Foo\",\n            \"field2\": \"Bar\",\n            ...\n        },\n        ...\n     ],\n   }\n"
        },
        {
          "title": "Success (200 OK) response sample (case of empty):",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"objects\": [ ],\n     \"status\": 200\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Event.js"
  },
  {
    "type": "get",
    "url": "/events",
    "title": "Find events",
    "name": "FindMultipleEvents",
    "group": "Events",
    "permission": "user admin",
    "description": "<p>look for Events<br/><b style=\"color:green;\">Throw valid response:</b> 200.<br/><b style=\"color:red;\">Throw error response:</b> 401, 403.</p>",
    "parameter": {
      "fields": {
        "Parameters (URL)": [
          {
            "group": "urlParam",
            "type": "Number",
            "field": "id",
            "optional": true,
            "description": "<p>Use it to retrieve only one event with its ID.</p>"
          },
          {
            "group": "urlParam",
            "type": "String",
            "field": "name",
            "optional": true,
            "description": ""
          },
          {
            "group": "urlParam",
            "type": "String",
            "field": "date",
            "optional": true,
            "description": ""
          },
          {
            "group": "urlParam",
            "type": "String",
            "field": "place",
            "optional": true,
            "description": ""
          },
          {
            "group": "urlParam",
            "type": "String",
            "field": "date_sort",
            "optional": true,
            "description": "<p>value: asc / desc</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example ",
        "content": "get http://109.31.47.142:3000/api/events\nget http://109.31.47.142:3000/api/users?sort=asc&eventDate=204-12-24\n"
      }
    ],
    "success": {
      "fields": {
        "Success (200 OK) response parameters": [
          {
            "group": "200",
            "type": "Object[]",
            "field": "objects",
            "optional": false,
            "description": "<p>The list of objects.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (200 OK) response sample:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"objects\": [\n        \"object1\": {\n            \"field1\": \"Foo\",\n            \"field2\": \"Bar\",\n            ...\n        },\n        \"object2\": {\n            \"field1\": \"Foo\",\n            \"field2\": \"Bar\",\n            ...\n        },\n        ...\n     ],\n   }\n"
        },
        {
          "title": "Success (200 OK) response sample (case of empty):",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"objects\": [ ],\n     \"status\": 200\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Event.js"
  },
  {
    "type": "put",
    "url": "/events",
    "title": "Update an event",
    "name": "UpdateEvent",
    "group": "Events",
    "permission": "authenticated eventOwner",
    "description": "<p>update an event<br/><b>Throw error:</b> 400.</p>",
    "parameter": {
      "fields": {
        "Parameters (Form Data)": [
          {
            "group": "dataParam",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": ""
          },
          {
            "group": "dataParam",
            "type": "String",
            "field": "description",
            "optional": true,
            "description": "<p>A token is required to update password.</p>"
          },
          {
            "group": "dataParam",
            "type": "String",
            "field": "place",
            "optional": true,
            "description": "<p>Required token to update password.</p>"
          },
          {
            "group": "dataParam",
            "type": "String",
            "field": "date",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "put http://109.31.47.142:3000/api/events\nform-data: description=My_will_such_as_hell&place=toHome\n"
      }
    ],
    "success": {
      "fields": {
        "Success (200 OK) response parameters": [
          {
            "group": "200",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>The updated object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (200 OK) response sample:",
          "content": "HTTP/1.1 200 OK\n{\n   \"object\": {\n       \"field1\": \"Foo\",\n       \"field2\": \"Bar\",\n       ...\n   },\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Event.js"
  },
  {
    "type": "put",
    "url": "/events/:idEvent/invitations/:idInvitation",
    "title": "Update an event invitation",
    "name": "UpdateEventInvitation",
    "group": "Events",
    "permission": {
      "name": "authenticated",
      "title": "Authentication requiered",
      "description": ""
    },
    "description": "<p>Update an invitation<br/><b>Throw error:</b> 404.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "idEvent",
            "optional": false,
            "description": "<p>Event&#39;s ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "idInvitation",
            "optional": false,
            "description": "<p>Invitation&#39;s ID</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "put http://109.31.47.142:3000/api/events/9/invitations/4\n"
      }
    ],
    "success": {
      "fields": {
        "Success (200 OK) response parameters": [
          {
            "group": "200",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>The updated object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (200 OK) response sample:",
          "content": "HTTP/1.1 200 OK\n{\n   \"object\": {\n       \"field1\": \"Foo\",\n       \"field2\": \"Bar\",\n       ...\n   },\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Event.js"
  },
  {
    "type": "post",
    "url": "/users/:id_user/friendsgroups/:id_group/members",
    "title": "Add a group member",
    "name": "AddUserGroupMember",
    "group": "Friends_Groups",
    "description": "<p><br/><b style=\"color:green;\">Throw valid response:</b> 201.<br/><b style=\"color:red;\">Throw error response:</b> 400, 401, 403, 409.</p>",
    "parameter": {
      "fields": {
        "Parameters (URL)": [
          {
            "group": "urlParam",
            "type": "Number",
            "field": "id_user",
            "optional": false,
            "description": "<p>Friends group&#39;s ID.</p>"
          },
          {
            "group": "urlParam",
            "type": "Number",
            "field": "id_group",
            "optional": false,
            "description": "<p>Friends group&#39;s ID.</p>"
          },
          {
            "group": "urlParam",
            "type": "Number",
            "field": "id_member",
            "optional": false,
            "description": "<p>The user ID you want to add.</p>"
          }
        ],
        "Parameters (Form Data)": [
          {
            "group": "dataParam",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>New name of the group</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "POST http://109.31.47.142:3000/api/users/15/friendsgroups/10/members\nform-data:\n----------\nid_member: 25\n"
      }
    ],
    "success": {
      "fields": {
        "Success (201 Created) response parameters": [
          {
            "group": "201",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>The created object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (201 Created) response sample:",
          "content": "HTTP/1.1 201 Created\n{\n   \"object\": {\n       \"field1\": \"Foo\",\n       \"field2\": \"Bar\",\n       ...\n   },\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/FriendsGroup.js"
  },
  {
    "type": "post",
    "url": "/users/:id_id/friendsgroups",
    "title": "Create a group",
    "name": "CreateUserGroup",
    "group": "Friends_Groups",
    "description": "<p><br/><b style=\"color:green;\">Throw valid response:</b> 201.<br/><b style=\"color:red;\">Throw error response:</b> 400, 401, 403, 409.</p>",
    "permission": {
      "name": "authenticated",
      "title": "Authentication requiered",
      "description": ""
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id_user",
            "optional": false,
            "description": "<p>Friends group&#39;s ID.</p>"
          }
        ],
        "Parameters (Form Data)": [
          {
            "group": "dataParam",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the group.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "POST http://109.31.47.142:3000/api/users/15/friendsgroups\nform-data:\n----------\nname: Family\n"
      }
    ],
    "success": {
      "fields": {
        "Success (201 Created) response parameters": [
          {
            "group": "201",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>The created object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (201 Created) response sample:",
          "content": "HTTP/1.1 201 Created\n{\n   \"object\": {\n       \"field1\": \"Foo\",\n       \"field2\": \"Bar\",\n       ...\n   },\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/FriendsGroup.js"
  },
  {
    "type": "delete",
    "url": "/users/:id_user/friendsgroups/:id_group",
    "title": "Delete a group",
    "name": "DeleteUserGroup",
    "group": "Friends_Groups",
    "description": "<p><br/><b style=\"color:green;\">Throw valid response:</b> 204.<br/><b style=\"color:red;\">Throw error response:</b> 400, 401, 403.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id_user",
            "optional": false,
            "description": "<p>Friends group&#39;s ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id_group",
            "optional": false,
            "description": "<p>Friends group&#39;s ID.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "DELETE http://109.31.47.142:3000/api/users/15/friendsgroups/10\n"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success (204 No content) response sample:",
          "content": "HTTP/1.1 204 No content\n{\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/FriendsGroup.js"
  },
  {
    "type": "delete",
    "url": "/users/:id_user/friendsgroups/:id_group/members/:id_member",
    "title": "Delete a group member",
    "name": "DeleteUserGroupMember",
    "group": "Friends_Groups",
    "description": "<p><br/><b style=\"color:green;\">Throw valid response:</b> 204.<br/><b style=\"color:red;\">Throw error response:</b> 400, 401, 403.</p>",
    "parameter": {
      "fields": {
        "Parameters (URL)": [
          {
            "group": "urlParam",
            "type": "Number",
            "field": "id_user",
            "optional": false,
            "description": "<p>Friends group&#39;s ID.</p>"
          },
          {
            "group": "urlParam",
            "type": "Number",
            "field": "id_group",
            "optional": false,
            "description": "<p>Friends group&#39;s ID.</p>"
          },
          {
            "group": "urlParam",
            "type": "Number",
            "field": "id_member",
            "optional": false,
            "description": "<p>Member&#39;s ID.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "DELETE http://109.31.47.142:3000/api/users/15/friendsgroups/10/members/25\n"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success (204 No content) response sample:",
          "content": "HTTP/1.1 204 No content\n{\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/FriendsGroup.js"
  },
  {
    "type": "get",
    "url": "/users/:id_user/friendsgroups/:id_group",
    "title": "Find a group",
    "name": "FindUserGroup",
    "group": "Friends_Groups",
    "groupDescription": "<p>Friends groups are simple group of users that one user can make. They are personal and private to each user.</p>",
    "description": "<p><br/><b style=\"color:green;\">Throw valid response:</b> 200.<br/><b style=\"color:red;\">Throw error response:</b> 400, 401, 403, 404.</p>",
    "permission": {
      "name": "authenticated",
      "title": "Authentication requiered",
      "description": ""
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id_user",
            "optional": false,
            "description": "<p>Friends group&#39;s ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id_group",
            "optional": false,
            "description": "<p>Friends group&#39;s ID.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "GET http://109.31.47.142:3000/api/users/15/friendsgroups/10\n"
      }
    ],
    "success": {
      "fields": {
        "Success (200 OK) response parameters": [
          {
            "group": "200",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>Requested object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (200 OK) response sample:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"object\": {\n        \"field1\": \"Foo\",\n        \"field2\": \"Bar\",\n        ...\n     },\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/FriendsGroup.js"
  },
  {
    "type": "get",
    "url": "/users/:id_user/friendsgroups",
    "title": "Find groups",
    "name": "FindUserGroups",
    "group": "Friends_Groups",
    "description": "<p><br/><b style=\"color:green;\">Throw valid response:</b> 200.<br/><b style=\"color:red;\">Throw error response:</b> 400, 401, 403, 404.</p>",
    "permission": {
      "name": "authenticated",
      "title": "Authentication requiered",
      "description": ""
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id_user",
            "optional": false,
            "description": "<p>Friends group&#39;s ID.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "GET http://109.31.47.142:3000/api/users/15/friendsgroups\n"
      }
    ],
    "success": {
      "fields": {
        "Success (200 OK) response parameters": [
          {
            "group": "200",
            "type": "Object[]",
            "field": "objects",
            "optional": false,
            "description": "<p>The list of objects.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (200 OK) response sample:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"objects\": [\n        \"object1\": {\n            \"field1\": \"Foo\",\n            \"field2\": \"Bar\",\n            ...\n        },\n        \"object2\": {\n            \"field1\": \"Foo\",\n            \"field2\": \"Bar\",\n            ...\n        },\n        ...\n     ],\n   }\n"
        },
        {
          "title": "Success (200 OK) response sample (case of empty):",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"objects\": [ ],\n     \"status\": 200\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/FriendsGroup.js"
  },
  {
    "type": "put",
    "url": "/users/:id_user/friendsgroups/:id_group",
    "title": "Update a group",
    "name": "UpdateUserGroup",
    "group": "Friends_Groups",
    "description": "<p><br/><b style=\"color:green;\">Throw valid response:</b> 200.<br/><b style=\"color:red;\">Throw error response:</b> 400, 401, 403.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id_user",
            "optional": false,
            "description": "<p>Friends group&#39;s ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id_group",
            "optional": false,
            "description": "<p>Friends group&#39;s ID.</p>"
          }
        ],
        "Parameters (Form Data)": [
          {
            "group": "dataParam",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>New name of the group</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "PUT http://109.31.47.142:3000/api/users/15/friendsgroups\nform-data:\n----------\nname: Family\n"
      }
    ],
    "success": {
      "fields": {
        "Success (200 OK) response parameters": [
          {
            "group": "200",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>The updated object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (200 OK) response sample:",
          "content": "HTTP/1.1 200 OK\n{\n   \"object\": {\n       \"field1\": \"Foo\",\n       \"field2\": \"Bar\",\n       ...\n   },\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/FriendsGroup.js"
  },
  {
    "parameter": {
      "fields": {
        "Parameters (URL)": [
          {
            "group": "urlParam",
            "type": "Number",
            "field": "id",
            "optional": true,
            "description": "<p>Use it to retrieve only one friendship with its ID.</p>"
          },
          {
            "group": "urlParam",
            "type": "String",
            "field": "state",
            "optional": true,
            "description": ""
          },
          {
            "group": "urlParam",
            "type": "String",
            "field": "createdDate",
            "optional": true,
            "description": ""
          },
          {
            "group": "urlParam",
            "type": "String",
            "field": "sort",
            "optional": true,
            "description": "<p>Sort results in differant way.</p>"
          }
        ]
      }
    },
    "group": "Friendship.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "sources/Friendship.js"
  },
  {
    "type": "post",
    "url": "/users/:id_user/friendships",
    "title": "Ask a new friend",
    "name": "CreateFriendship",
    "group": "Friendships",
    "permission": {
      "name": "authenticated",
      "title": "Authentication requiered",
      "description": ""
    },
    "description": "<p>This will create a new friend request for the specified user. The friendship will only have the state &quot;wait for response&quot;.<br/><b style=\"color:green;\">Throw valid response:</b> 201.<br/><b style=\"color:red;\">Throw error response:</b> 400, 409.</p>",
    "parameter": {
      "fields": {
        "urlParams": [
          {
            "group": "urlParams",
            "type": "Number",
            "field": "id_user",
            "optional": false,
            "description": "<p>User&#39;s ID.</p>"
          }
        ],
        "dataParams": [
          {
            "group": "dataParams",
            "type": "Number",
            "field": "id_friend",
            "optional": false,
            "description": "<p>ID of the user to ask as friend.</p>"
          },
          {
            "group": "dataParams",
            "type": "boolean",
            "field": "force_accept",
            "optional": false,
            "description": "<p><b>Admin.</b> Force the acceptance. (true/false).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "POST http://109.31.47.142:3000/api/users/10/friendships\nform-data:\n----------\nid_friend: 27\n"
      }
    ],
    "success": {
      "fields": {
        "Success (201 Created) response parameters": [
          {
            "group": "201",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>The created object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (201 Created) response sample:",
          "content": "HTTP/1.1 201 Created\n{\n   \"object\": {\n       \"field1\": \"Foo\",\n       \"field2\": \"Bar\",\n       ...\n   },\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Friendship.js"
  },
  {
    "type": "delete",
    "url": "/users/:id_user/friendships/:id_friendship",
    "title": "Delete a friendship",
    "name": "DeleteFriendship",
    "group": "Friendships",
    "permission": "accountOwner admin",
    "description": "<p><br/><b style=\"color:green;\">Throw valid response:</b> 204.<br/><b style=\"color:red;\">Throw error response:</b> 400, 401, 403.</p>",
    "parameter": {
      "fields": {
        "urlParams": [
          {
            "group": "urlParams",
            "type": "Number",
            "field": "id_user",
            "optional": false,
            "description": "<p>User&#39;s ID.</p>"
          },
          {
            "group": "urlParams",
            "type": "Number",
            "field": "id_friendship",
            "optional": false,
            "description": "<p>ID of the friendship to cancel.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "DELETE http://109.31.47.142:3000/api/users/15/friends/27\n"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success (204 No content) response sample:",
          "content": "HTTP/1.1 204 No content\n{\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Friendship.js"
  },
  {
    "type": "get",
    "url": "/users/:user_id/friendships/:id",
    "title": "Find a friendship request",
    "name": "FindFriendship",
    "group": "Friendships",
    "groupDescription": "<p>API relatives to friendships. Friendship are a relation between two user. These users are considered as friends. A friendship is not necessary valid.<br/>The friendship must be accepted by the target before being established, so the friendship can have several states like (waiting / cancelled / accepted / ...).</p>",
    "description": "<p>Allow to find a friendship by its ID<br/><b style=\"color:green;\">Throw valid response:</b> 200.<br/><b style=\"color:red;\">Throw error response:</b> 400, 401, 403, 404.</p>",
    "permission": "authenticated author",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "user_id",
            "optional": false,
            "description": "<p>User&#39;s ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Friendship&#39;s ID</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "get http://109.31.47.142:3000/api/users/15/friendships/25\n"
      }
    ],
    "success": {
      "fields": {
        "Success (200 OK) response parameters": [
          {
            "group": "200",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>Requested object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (200 OK) response sample:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"object\": {\n        \"field1\": \"Foo\",\n        \"field2\": \"Bar\",\n        ...\n     },\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Friendship.js"
  },
  {
    "type": "get",
    "url": "/users/:id/friendships",
    "title": "Find friendships requests",
    "name": "FindFriendships",
    "group": "Friendships",
    "permission": "authenticated author",
    "description": "<p>Fetch all friendships request with any states.<br/><b style=\"color:green;\">Throw valid response:</b> 200.<br/><b style=\"color:red;\">Throw error response:</b> 400, 401, 403.</p>",
    "parameter": {
      "fields": {
        "Parameters (URL)": [
          {
            "group": "urlParam",
            "type": "Number",
            "field": "id",
            "optional": true,
            "description": "<p>Search by ID.</p>"
          },
          {
            "group": "urlParam",
            "type": "String",
            "field": "state",
            "optional": true,
            "description": ""
          },
          {
            "group": "urlParam",
            "type": "String",
            "field": "createdDate",
            "optional": true,
            "description": ""
          },
          {
            "group": "urlParam",
            "type": "String",
            "field": "sort",
            "optional": true,
            "description": "<p>Sort results in differant way.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "GET http://109.31.47.142:3000/api/users/10/friendships\nGET http://109.31.47.142:3000/api/users/10/friendships?state=accepted\n"
      }
    ],
    "success": {
      "fields": {
        "Success (200 OK) response parameters": [
          {
            "group": "200",
            "type": "Object[]",
            "field": "objects",
            "optional": false,
            "description": "<p>The list of objects.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (200 OK) response sample:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"objects\": [\n        \"object1\": {\n            \"field1\": \"Foo\",\n            \"field2\": \"Bar\",\n            ...\n        },\n        \"object2\": {\n            \"field1\": \"Foo\",\n            \"field2\": \"Bar\",\n            ...\n        },\n        ...\n     ],\n   }\n"
        },
        {
          "title": "Success (200 OK) response sample (case of empty):",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"objects\": [ ],\n     \"status\": 200\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Friendship.js"
  },
  {
    "type": "get",
    "url": "/users/:id/friends",
    "title": "Find friends",
    "name": "FindUserFriends",
    "group": "Friendships",
    "description": "<p>Find a user&#39;s friends.<br/><b style=\"color:green;\">Throw valid response:</b> 200.<br/><b style=\"color:red;\">Throw error response:</b> 400, 401, 403.</p>",
    "examples": [
      {
        "title": "Use example",
        "content": "GET http://109.31.47.142:3000/api/users/15/friends\n"
      }
    ],
    "success": {
      "fields": {
        "Success (200 OK) response parameters": [
          {
            "group": "200",
            "type": "Object[]",
            "field": "objects",
            "optional": false,
            "description": "<p>The list of objects.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (200 OK) response sample:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"objects\": [\n        \"object1\": {\n            \"field1\": \"Foo\",\n            \"field2\": \"Bar\",\n            ...\n        },\n        \"object2\": {\n            \"field1\": \"Foo\",\n            \"field2\": \"Bar\",\n            ...\n        },\n        ...\n     ],\n   }\n"
        },
        {
          "title": "Success (200 OK) response sample (case of empty):",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"objects\": [ ],\n     \"status\": 200\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Friendship.js"
  },
  {
    "type": "put",
    "url": "users/:id_user/friendships/:id_friendship",
    "title": "Respond a friend request",
    "name": "UpdateFriendship",
    "group": "Friendships",
    "permission": "authenticated accountOwner admin",
    "description": "<p><br/><b style=\"color:green;\">Throw valid response:</b> 200.<br/><b style=\"color:red;\">Throw error response:</b> 400, 401, 403.</p>",
    "parameter": {
      "fields": {
        "urlParams": [
          {
            "group": "urlParams",
            "type": "Number",
            "field": "id_user",
            "optional": false,
            "description": "<p>User&#39;s ID.</p>"
          },
          {
            "group": "urlParams",
            "type": "Number",
            "field": "id_friendship",
            "optional": false,
            "description": "<p>ID of the concerned friendship.</p>"
          }
        ],
        "Parameters (Form Data)": [
          {
            "group": "dataParam",
            "type": "String",
            "field": "accept",
            "optional": false,
            "description": "<p>(true/false)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "PUT http://109.31.47.142:3000/api/users/10/friendships/26\nform-data:\n----------\naccept: false (I don't give a shit about you dude!) or true (Come to share a bit of Mojo time bro <3)\n"
      }
    ],
    "success": {
      "fields": {
        "Success (200 OK) response parameters": [
          {
            "group": "200",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>The updated object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (200 OK) response sample:",
          "content": "HTTP/1.1 200 OK\n{\n   \"object\": {\n       \"field1\": \"Foo\",\n       \"field2\": \"Bar\",\n       ...\n   },\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Friendship.js"
  },
  {
    "type": "post",
    "url": "/products",
    "title": "Create one product",
    "name": "CreateProduct",
    "group": "Products",
    "permission": "todo",
    "description": "<p><br/><b style=\"color:green;\">Throw valid response:</b> 201.<br/><b style=\"color:red;\">Throw error response:</b> 400, 409.</p>",
    "parameter": {
      "fields": {
        "Parameters (Form Data)": [
          {
            "group": "dataParam",
            "type": "Boolean",
            "field": "official",
            "optional": false,
            "description": "<p><b>Admin.</b></p>"
          },
          {
            "group": "dataParam",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": ""
          },
          {
            "group": "dataParam",
            "type": "String",
            "field": "logo",
            "optional": true,
            "description": ""
          },
          {
            "group": "dataParam",
            "type": "Number",
            "field": "category_id",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "POST http://109.31.47.142:3000/api/products\nform-data:\n----------\nofficial: true\nname: Chips\nlogo:\ncategory_id: 1\n"
      }
    ],
    "success": {
      "fields": {
        "Success (201 Created) response parameters": [
          {
            "group": "201",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>The created object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (201 Created) response sample:",
          "content": "HTTP/1.1 201 Created\n{\n   \"object\": {\n       \"field1\": \"Foo\",\n       \"field2\": \"Bar\",\n       ...\n   },\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Product.js"
  },
  {
    "type": "delete",
    "url": "/products/:id",
    "title": "Delete one product",
    "name": "DeleteProduct",
    "group": "Products",
    "permission": "todo",
    "description": "<p><br/><b style=\"color:green;\">Throw valid response:</b> 204.<br/><b style=\"color:red;\">Throw error response:</b> 400, 401, 403.</p>",
    "parameter": {
      "fields": {
        "urlParams": [
          {
            "group": "urlParams",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Product&#39;s ID.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "DELETE http://109.31.47.142:3000/api/products/15\n"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success (204 No content) response sample:",
          "content": "HTTP/1.1 204 No content\n{\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Product.js"
  },
  {
    "type": "get",
    "url": "/products",
    "title": "Find products",
    "name": "FindMultipleProduct",
    "group": "Products",
    "permission": "todo",
    "description": "<p><br/><b style=\"color:green;\">Throw valid response:</b> 200.<br/><b style=\"color:red;\">Throw error response:</b> 400, 401, 403.</p>",
    "examples": [
      {
        "title": "Use example",
        "content": "GET http://109.31.47.142:3000/api/products\n"
      }
    ],
    "success": {
      "fields": {
        "Success (200 OK) response parameters": [
          {
            "group": "200",
            "type": "Object[]",
            "field": "objects",
            "optional": false,
            "description": "<p>The list of objects.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (200 OK) response sample:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"objects\": [\n        \"object1\": {\n            \"field1\": \"Foo\",\n            \"field2\": \"Bar\",\n            ...\n        },\n        \"object2\": {\n            \"field1\": \"Foo\",\n            \"field2\": \"Bar\",\n            ...\n        },\n        ...\n     ],\n   }\n"
        },
        {
          "title": "Success (200 OK) response sample (case of empty):",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"objects\": [ ],\n     \"status\": 200\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Product.js"
  },
  {
    "type": "get",
    "url": "/products/:id",
    "title": "Find one product",
    "name": "FindProduct",
    "group": "Products",
    "groupDescription": "<p>API relatives to products.</p>",
    "description": "<p><br/><b style=\"color:green;\">Throw valid response:</b> 200.<br/><b style=\"color:red;\">Throw error response:</b> 400, 401, 403, 404.</p>",
    "permission": "todo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Product&#39;s ID</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "GET http://109.31.47.142:3000/api/products/15\n"
      }
    ],
    "success": {
      "fields": {
        "Success (200 OK) response parameters": [
          {
            "group": "200",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>Requested object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (200 OK) response sample:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"object\": {\n        \"field1\": \"Foo\",\n        \"field2\": \"Bar\",\n        ...\n     },\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Product.js"
  },
  {
    "type": "put",
    "url": "/products",
    "title": "Update one product",
    "name": "UpdateProduct",
    "group": "Products",
    "permission": "todo",
    "description": "<p><br/><b style=\"color:green;\">Throw valid response:</b> 200.<br/><b style=\"color:red;\">Throw error response:</b> 400, 401, 403.</p>",
    "parameter": {
      "fields": {
        "Parameters (Form Data)": [
          {
            "group": "dataParam",
            "type": "String",
            "field": "name",
            "optional": true,
            "description": ""
          },
          {
            "group": "dataParam",
            "type": "Number",
            "field": "category_id",
            "optional": true,
            "description": ""
          },
          {
            "group": "dataParam",
            "type": "String",
            "field": "logo",
            "optional": true,
            "description": ""
          },
          {
            "group": "dataParam",
            "type": "String",
            "field": "official",
            "optional": true,
            "description": "<p><b>Admin.</b></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "PUT http://109.31.47.142:3000/api/products\nform-data:\n----------\nofficial: true\nname: Chips\nlogo:\ncategory_id: 1\n"
      }
    ],
    "success": {
      "fields": {
        "Success (200 OK) response parameters": [
          {
            "group": "200",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>The updated object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (200 OK) response sample:",
          "content": "HTTP/1.1 200 OK\n{\n   \"object\": {\n       \"field1\": \"Foo\",\n       \"field2\": \"Bar\",\n       ...\n   },\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/Product.js"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create one user",
    "name": "CreateUser",
    "group": "Users",
    "permission": "guest admin",
    "description": "<p>Create one user and retrieve the created object. A user is designed by a unique email.If the user exist or one of primary field is already taken then the response will be 409.<br/><b style=\"color:green;\">Throw valid response:</b> 201.<br/><b style=\"color:red;\">Throw error response:</b> 400, 403, 409.</p>",
    "parameter": {
      "fields": {
        "Parameters (Form Data)": [
          {
            "group": "dataParam",
            "type": "String",
            "field": "email",
            "optional": false,
            "description": "<p>Should be unique.</p>"
          },
          {
            "group": "dataParam",
            "type": "String",
            "field": "password",
            "optional": false,
            "description": "<p>This password is the md5 hashed + salted password.</p>"
          },
          {
            "group": "dataParam",
            "type": "String",
            "field": "firstname",
            "optional": false,
            "description": ""
          },
          {
            "group": "dataParam",
            "type": "String",
            "field": "lastname",
            "optional": false,
            "description": ""
          },
          {
            "group": "dataParam",
            "type": "String",
            "field": "phone",
            "optional": true,
            "description": "<p>Must be in this form: +33656565656 with (+??) as the country identifier.</p>"
          },
          {
            "group": "dataParam",
            "type": "String",
            "field": "api_key",
            "optional": true,
            "description": "<p><b>Admin.</b> Force api key value.</p>"
          },
          {
            "group": "dataParam",
            "type": "String",
            "field": "role_id",
            "optional": true,
            "description": "<p><b>Admin.</b> force role ID value.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "POST http://109.31.47.142:3000/api/users\nform-data:\n----------\nemail: xmax54@gmail.com\npassword: password\n...\n"
      }
    ],
    "success": {
      "fields": {
        "Success (201 Created) response parameters": [
          {
            "group": "201",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>The created object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (201 Created) response sample:",
          "content": "HTTP/1.1 201 Created\n{\n   \"object\": {\n       \"field1\": \"Foo\",\n       \"field2\": \"Bar\",\n       ...\n   },\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/User.js"
  },
  {
    "type": "delete",
    "url": "/users/:id",
    "title": "Delete one user",
    "name": "DeleteUser",
    "group": "Users",
    "permission": "accountOwner admin",
    "description": "<p>To delete a user you must have correct rights.<br/><b style=\"color:green;\">Throw valid response:</b> 204.<br/><b style=\"color:red;\">Throw error response:</b> 401, 403, 404.</p>",
    "parameter": {
      "fields": {
        "urlParams": [
          {
            "group": "urlParams",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>User&#39;s ID.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "DELETE http://109.31.47.142:3000/api/users/15\n"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success (204 No content) response sample:",
          "content": "HTTP/1.1 204 No content\n{\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/User.js"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Find users",
    "name": "FindMultipleUsers",
    "group": "Users",
    "permission": "user admin",
    "description": "<p>Fetch group of users with criterias. The response is never empty and in worst case you will get an empty object.<br/><b style=\"color:green;\">Throw valid response:</b> 200.<br/><b style=\"color:red;\">Throw error response:</b> 401, 403.</p>",
    "parameter": {
      "fields": {
        "Parameters (URL)": [
          {
            "group": "urlParam",
            "type": "Number",
            "field": "id",
            "optional": true,
            "description": "<p>Search by ID.</p>"
          },
          {
            "group": "urlParam",
            "type": "String",
            "field": "seniority_sort",
            "optional": true,
            "description": "<p>(asc/desc) Search by recent or old created accounts.</p>"
          },
          {
            "group": "urlParam",
            "type": "String",
            "field": "email",
            "optional": true,
            "description": ""
          },
          {
            "group": "urlParam",
            "type": "String",
            "field": "firstname",
            "optional": true,
            "description": "<p>Search by firstname.</p>"
          },
          {
            "group": "urlParam",
            "type": "String",
            "field": "lastname",
            "optional": true,
            "description": "<p>Search by lastname.</p>"
          },
          {
            "group": "urlParam",
            "type": "String",
            "field": "firstname_sort",
            "optional": true,
            "description": "<p>value: asc / desc.</p>"
          },
          {
            "group": "urlParam",
            "type": "String",
            "field": "lastname_sort",
            "optional": true,
            "description": "<p>value: asc / desc.</p>"
          },
          {
            "group": "urlParam",
            "type": "String",
            "field": "firstname_like",
            "optional": true,
            "description": "<p>Search by firstname with LIKE condition. Value example: &quot;ax&quot; will return &quot;maxime&quot; or &quot;max&quot;.</p>"
          },
          {
            "group": "urlParam",
            "type": "String",
            "field": "lastname_like",
            "optional": true,
            "description": "<p>Search by lastname with LIKE condition. Value example: &quot;re&quot; will return &quot;bret&quot; or &quot;breton&quot;.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "GET http://109.31.47.142:3000/api/users\nGET http://109.31.47.142:3000/api/users?sort=asc&firstname=maxime\n"
      }
    ],
    "success": {
      "fields": {
        "Success (200 OK) response parameters": [
          {
            "group": "200",
            "type": "Object[]",
            "field": "objects",
            "optional": false,
            "description": "<p>The list of objects.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (200 OK) response sample:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"objects\": [\n        \"object1\": {\n            \"field1\": \"Foo\",\n            \"field2\": \"Bar\",\n            ...\n        },\n        \"object2\": {\n            \"field1\": \"Foo\",\n            \"field2\": \"Bar\",\n            ...\n        },\n        ...\n     ],\n   }\n"
        },
        {
          "title": "Success (200 OK) response sample (case of empty):",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"objects\": [ ],\n     \"status\": 200\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/User.js"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Find one user",
    "name": "FindUser",
    "group": "Users",
    "groupDescription": "<p>API relatives to users and in more explicitly way accounts.</p>",
    "description": "<p>Find a user by its ID. While request is not correct or no users exist you will get a 404 error.<br/><b style=\"color:green;\">Throw valid response:</b> 200.<br/><b style=\"color:red;\">Throw error response:</b> 401, 403, 404.</p>",
    "permission": "user admin",
    "parameter": {
      "fields": {
        "Parameters (URL)": [
          {
            "group": "urlParam",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>User&#39;s ID</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "GET http://109.31.47.142:3000/api/users/15\n"
      }
    ],
    "success": {
      "fields": {
        "Success (200 OK) response parameters": [
          {
            "group": "200",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>Requested object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (200 OK) response sample:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"object\": {\n        \"field1\": \"Foo\",\n        \"field2\": \"Bar\",\n        ...\n     },\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/User.js"
  },
  {
    "type": "patch",
    "url": "/users/:email",
    "title": "Generate a user's pwd reset token",
    "name": "GenerateUserResetTokenPassword",
    "group": "Users",
    "permission": "authenticated accountOwner admin",
    "description": "<p>Generate a password reset token for the designed user. This token can be used later to update the user password. Then send an email to the specified user.If silent is set to false the method will respond 204 only after mail has been send. So this method may take some time to be processed.<br/><b style=\"color:green;\">Throw valid response:</b> 204.<br/><b style=\"color:red;\">Throw error response:</b> 400, 401, 403.</p>",
    "parameter": {
      "fields": {
        "urlParams": [
          {
            "group": "urlParams",
            "type": "String",
            "field": "email",
            "optional": false,
            "description": "<p>User&#39;s email.</p>"
          }
        ],
        "Parameters (Form Data)": [
          {
            "group": "dataParam",
            "type": "Boolean",
            "field": "reset_password",
            "optional": false,
            "description": ""
          },
          {
            "group": "dataParam",
            "type": "Boolean",
            "field": "silent",
            "defaultValue": "false",
            "optional": true,
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "PATCH http://109.31.47.142:3000/api/users/user@user.com\nform-data:\n----------\nreset_password=true\nsilent=false\n"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success (204 No content) response sample:",
          "content": "HTTP/1.1 204 No content\n{\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/User.js"
  },
  {
    "type": "put",
    "url": "/users/:id",
    "title": "Update one user",
    "name": "UpdateUser",
    "group": "Users",
    "permission": "user admin",
    "description": "<p>Update an user and get it back. A generated reset token is needed to update password, see the designed method. <b>An user can only update its own account</b>.<br/><b style=\"color:green;\">Throw valid response:</b> 200.<br/><b style=\"color:red;\">Throw error response:</b> 400, 401, 403, 404.</p>",
    "parameter": {
      "fields": {
        "Parameters (URL)": [
          {
            "group": "urlParam",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": ""
          }
        ],
        "Parameters (Form Data)": [
          {
            "group": "dataParam",
            "type": "String",
            "field": "email",
            "optional": true,
            "description": "<p><b>Admin.</b></p>"
          },
          {
            "group": "dataParam",
            "type": "String",
            "field": "password",
            "optional": true,
            "description": "<p>A token is required to update password. This password is the md5 hashed + salted password.</p>"
          },
          {
            "group": "dataParam",
            "type": "String",
            "field": "password_token",
            "optional": true,
            "description": "<p>Required token to update password.</p>"
          },
          {
            "group": "dataParam",
            "type": "String",
            "field": "firstname",
            "optional": true,
            "description": ""
          },
          {
            "group": "dataParam",
            "type": "String",
            "field": "lastname",
            "optional": true,
            "description": ""
          },
          {
            "group": "dataParam",
            "type": "String",
            "field": "phone",
            "optional": true,
            "description": ""
          },
          {
            "group": "dataParam",
            "type": "String",
            "field": "preference_foo",
            "optional": true,
            "description": "<p>Change the preference foo</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Use example",
        "content": "PUT http://109.31.47.142:3000/api/users/1\nform-data:\n----------\nemail: xmax54@gmail.com\npassword: password\n"
      }
    ],
    "success": {
      "fields": {
        "Success (200 OK) response parameters": [
          {
            "group": "200",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>The updated object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (200 OK) response sample:",
          "content": "HTTP/1.1 200 OK\n{\n   \"object\": {\n       \"field1\": \"Foo\",\n       \"field2\": \"Bar\",\n       ...\n   },\n}\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "sources/User.js"
  },
  {
    "success": {
      "fields": {
        "Success (200 OK) response parameters": [
          {
            "group": "200",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>Requested object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (200 OK) response sample:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"object\": {\n        \"field1\": \"Foo\",\n        \"field2\": \"Bar\",\n        ...\n     },\n   }\n"
        }
      ]
    },
    "group": "_general.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "sources/_general.js"
  },
  {
    "success": {
      "fields": {
        "Success (200 OK) response parameters": [
          {
            "group": "200",
            "type": "Object[]",
            "field": "objects",
            "optional": false,
            "description": "<p>The list of objects.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (200 OK) response sample:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"objects\": [\n        \"object1\": {\n            \"field1\": \"Foo\",\n            \"field2\": \"Bar\",\n            ...\n        },\n        \"object2\": {\n            \"field1\": \"Foo\",\n            \"field2\": \"Bar\",\n            ...\n        },\n        ...\n     ],\n   }\n"
        },
        {
          "title": "Success (200 OK) response sample (case of empty):",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"objects\": [ ],\n     \"status\": 200\n   }\n"
        }
      ]
    },
    "group": "_general.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "sources/_general.js"
  },
  {
    "success": {
      "fields": {
        "Success (201 Created) response parameters": [
          {
            "group": "201",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>The created object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (201 Created) response sample:",
          "content": "HTTP/1.1 201 Created\n{\n   \"object\": {\n       \"field1\": \"Foo\",\n       \"field2\": \"Bar\",\n       ...\n   },\n}\n"
        }
      ]
    },
    "group": "_general.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "sources/_general.js"
  },
  {
    "success": {
      "fields": {
        "Success (200 OK) response parameters": [
          {
            "group": "200",
            "type": "Object",
            "field": "object",
            "optional": false,
            "description": "<p>The updated object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (200 OK) response sample:",
          "content": "HTTP/1.1 200 OK\n{\n   \"object\": {\n       \"field1\": \"Foo\",\n       \"field2\": \"Bar\",\n       ...\n   },\n}\n"
        }
      ]
    },
    "group": "_general.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "sources/_general.js"
  },
  {
    "error": {
      "examples": [
        {
          "title": "Error (500 Serveur Error) response sample:",
          "content": "   HTTP/1.1 500 Serveur Error\n   {\n     \"message\": \"Database unavailable\",\n     \"code\": \"dbUnavailable\"\n   }\n"
        }
      ]
    },
    "group": "_general.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "sources/_general.js"
  },
  {
    "success": {
      "examples": [
        {
          "title": "Success (204 No content) response sample:",
          "content": "HTTP/1.1 204 No content\n{\n}\n"
        }
      ]
    },
    "group": "_general.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "sources/_general.js"
  },
  {
    "error": {
      "fields": {
        "Response attributes": [
          {
            "group": "errorResponse",
            "type": "String",
            "field": "message",
            "optional": false,
            "description": "<p>Error message.</p>"
          },
          {
            "group": "errorResponse",
            "type": "String",
            "field": "description",
            "optional": true,
            "description": "<p>More detailed error message.</p>"
          },
          {
            "group": "errorResponse",
            "type": "String",
            "field": "code",
            "optional": false,
            "description": "<p>Error code (Check the section above).</p>"
          },
          {
            "group": "errorResponse",
            "type": "Object[]",
            "field": "params",
            "optional": true,
            "description": "<p>The parameters the error relates to if the error is parameter-specific.</p>"
          },
          {
            "group": "errorResponse",
            "type": "Object[]",
            "field": "params.field",
            "optional": false,
            "description": "<p>The field name relatives to error.</p>"
          },
          {
            "group": "errorResponse",
            "type": "String",
            "field": "params.field.code",
            "optional": false,
            "description": "<p>The code error.</p>"
          },
          {
            "group": "errorResponse",
            "type": "String",
            "field": "params.field.message",
            "optional": false,
            "description": ""
          },
          {
            "group": "errorResponse",
            "type": "String",
            "field": "params.field.description",
            "optional": true,
            "description": ""
          },
          {
            "group": "errorResponse",
            "type": "String",
            "field": "params.field.value",
            "optional": true,
            "description": ""
          }
        ]
      }
    },
    "group": "_general.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "sources/_general.js"
  },
  {
    "error": {
      "examples": [
        {
          "title": "Error (400 Bad request) response sample (case of parameters validation failed):",
          "content": "   HTTP/1.1 400 BAD REQUEST\n   {\n     \"message\": \"The requested parameters are not correct\",\n     \"code\": \"invalidParams\"\n     \"params\": [\n        \"field1\": [\n            {\n                \"message\": \"This field should contain at least 4 characters\",\n                \"description\": \"This field should contain at least 4 characters motherfucker !!!\",\n                \"code\": \"fieldTooShort\"\n                \"value\": \"foo\"\n            }\n        ],\n        ...\n     ],\n   }\n"
        }
      ]
    },
    "group": "_general.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "sources/_general.js"
  },
  {
    "error": {
      "examples": [
        {
          "title": "Error (404 Not Found) response sample:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"message\": \"This user doesn't exist\",\n     \"code\": \"modelNotFound\"\n   }\n"
        }
      ]
    },
    "group": "_general.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "sources/_general.js"
  },
  {
    "error": {
      "examples": [
        {
          "title": "Error (401 Unauthorized Error) response sample (case of authentication parameters are missing):",
          "content": "   HTTP/1.1 401 Unauthorized Error\n   {\n     \"message\": \"You are not authorized\",\n     \"code\": \"unauthorized\"\n   }\n"
        }
      ]
    },
    "group": "_general.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "sources/_general.js"
  },
  {
    "error": {
      "examples": [
        {
          "title": "Error (403 Forbidden Error) response sample:",
          "content": "   HTTP/1.1 403 Forbidden Error\n   {\n     \"message\": \"You do not have enough rights to access this resource\",\n     \"code\": \"noAccessRights\"\n   }\n"
        }
      ]
    },
    "group": "_general.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "sources/_general.js"
  },
  {
    "error": {
      "examples": [
        {
          "title": "Error (409 Conflict Error) response sample:",
          "content": "   HTTP/1.1 409 Conflict Error\n   {\n     \"message\": \"Email already taken\",\n     \"description\": \"foo\",\n     \"code\": \"emailArleadyTaken\"\n   }\n"
        }
      ]
    },
    "group": "_general.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "sources/_general.js"
  },
  {
    "success": {
      "examples": [
        {
          "title": "Success (204 No content) response sample:",
          "content": "HTTP/1.1 204 No content\n{\n}\n"
        }
      ]
    },
    "group": "_general.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "sources/_general.js"
  }
] });