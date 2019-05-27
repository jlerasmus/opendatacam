define({ "api": [
  {
    "type": "get",
    "url": "/counter/areas",
    "title": "Get areas",
    "name": "Get_counter_areas",
    "group": "Counter",
    "description": "<p>Get counter areas defined</p>",
    "success": {
      "examples": [
        {
          "title": "Frame example (once parsed to JSON):",
          "content": "{\n       \"fbb8a65b-03cc-4c95-8d6f-663ac4bd9aa0\": {\n         \"color\": \"yellow\",\n         \"location\": {\n           \"point1\": {\n             \"x\": 263,\n             \"y\": 625\n           },\n           \"point2\": {\n             \"x\": 472,\n             \"y\": 615\n           },\n           \"refResolution\": {\n             \"w\": 1500,\n             \"h\": 871\n           }\n         },\n         \"name\": \"test\",\n         \"computed\": {\n           \"a\": 0.046349957976037706,\n           \"b\": -527.0496981416069,\n           \"xBounds\": {\n             \"xMin\": 224.42666666666668,\n             \"xMax\": 402.7733333333333\n           }\n         }\n       },\n       \"a684ad42-d6fe-4be4-b77b-09b8473cc487\": {\n         \"color\": \"turquoise\",\n         \"location\": {\n           \"point1\": {\n             \"x\": 532,\n             \"y\": 647\n           },\n           \"point2\": {\n             \"x\": 729,\n             \"y\": 641\n           },\n           \"refResolution\": {\n             \"w\": 1500,\n             \"h\": 871\n           }\n         },\n         \"name\": \"area 2\",\n         \"computed\": {\n           \"a\": 0.029503983402006398,\n           \"b\": -548.2275463758912,\n           \"xBounds\": {\n             \"xMin\": 453.97333333333336,\n             \"xMax\": 622.08\n           }\n         }\n       }\n     }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./server.js",
    "groupTitle": "Counter"
  },
  {
    "type": "post",
    "url": "/counter/areas",
    "title": "Register areas",
    "name": "Register_areas",
    "group": "Counter",
    "description": "<p>Send counter areas definition to server</p> <p>It will replace all current counter areas (doesn't update a specific one)</p> <p>If you want to remove all counter areas, send an empty object</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "point1",
            "description": "<p>First point of the counter line definition</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "point2",
            "description": "<p>Second point of the counter line definition</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "refResolution",
            "description": "<p>Resolution of client side canvas where the line is drawn</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n        \"countingAreas\": {\n          \"5287124a-4598-44e7-abaf-394018a7278b\": {\n            \"color\": \"yellow\",\n            \"location\": {\n              \"point1\": {\n                \"x\": 221,\n                \"y\": 588\n              },\n              \"point2\": {\n                \"x\": 673,\n                \"y\": 546\n              },\n              \"refResolution\": {\n                \"w\": 1280,\n                \"h\": 666\n              }\n            },\n            \"name\": \"Counter line 1\"\n          }\n        }\n      }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./server.js",
    "groupTitle": "Counter"
  },
  {
    "type": "get",
    "url": "/config",
    "title": "Config",
    "name": "Config",
    "group": "Helper",
    "description": "<p>Get config.json content loaded by Opendatacam</p>",
    "version": "0.0.0",
    "filename": "./server.js",
    "groupTitle": "Helper"
  },
  {
    "type": "get",
    "url": "/console",
    "title": "Console",
    "name": "Console",
    "group": "Helper",
    "description": "<p>Send the last 3000 characters of the server <strong>stoud</strong></p>",
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "Ready on http://localhost:8080 > Ready on http://192.168.0.195:8080",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./server.js",
    "groupTitle": "Helper"
  },
  {
    "type": "get",
    "url": "/ui",
    "title": "Get UI settings",
    "name": "Get_UI_settings",
    "group": "Helper",
    "description": "<p>Get UI settings</p> <p>Through this api you can get UI settings like whether counter and pathfinder features are enabled</p>",
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n       counterEnabled: true,\n       pathfinderEnabled: true\n     }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./server.js",
    "groupTitle": "Helper"
  },
  {
    "type": "post",
    "url": "/ui",
    "title": "Save UI settings",
    "name": "Save_UI_settings",
    "group": "Helper",
    "description": "<p>Save UI settings</p> <p>Through this api you can persist some UI settings like whether counter and pathfinder features are enabled</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "counterEnabled",
            "description": "<p>If counter feature is enabled</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "pathfinderEnabled",
            "description": "<p>If pathfinder feature is enabled</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n       counterEnabled: true,\n       pathfinderEnabled: true\n     }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./server.js",
    "groupTitle": "Helper"
  },
  {
    "type": "get",
    "url": "/recording/:id/counter",
    "title": "Counter data",
    "name": "Counter_data",
    "group": "Recording",
    "description": "<p>Get counter data for a specific recording</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Recording id (_id field of /recordings)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "[\n      {\n        \"_id\": \"5cc3400252340f451cd7397a\",\n        \"dateStart\": \"2019-04-26T17:29:38.190Z\",\n        \"dateEnd\": \"2019-04-26T17:32:14.563Z\",\n        \"areas\": {\n          \"94afa4f8-1d24-4011-a481-ad3036e959b4\": {\n            \"color\": \"yellow\",\n            \"location\": {\n              \"point1\": {\n                \"x\": 241,\n                \"y\": 549\n              },\n              \"point2\": {\n                \"x\": 820,\n                \"y\": 513\n              },\n              \"refResolution\": {\n                \"w\": 1280,\n                \"h\": 666\n              }\n            },\n            \"name\": \"test\",\n            \"computed\": {\n              \"a\": 0.06721747654390149,\n              \"b\": -609.7129253605938,\n              \"xBounds\": {\n                \"xMin\": 241,\n                \"xMax\": 820\n              }\n            }\n          }\n        },\n        \"counterSummary\": {\n          \"94afa4f8-1d24-4011-a481-ad3036e959b4\": {\n            \"car\": 111,\n            \"_total\": 111\n          }\n        },\n        \"trackerSummary\": {\n          \"totalItemsTracked\": 566\n        },\n        \"counterHistory\": [\n          [\n            {\n              \"timestamp\": \"2019-04-26T17:29:38.811Z\",\n              \"area\": \"94afa4f8-1d24-4011-a481-ad3036e959b4\",\n              \"name\": \"car\",\n              \"id\": 1021\n            }\n          ],\n          [\n            {\n              \"timestamp\": \"2019-04-26T17:29:40.338Z\",\n              \"area\": \"94afa4f8-1d24-4011-a481-ad3036e959b4\",\n              \"name\": \"car\",\n              \"id\": 1030\n            }\n          ]\n      }\n    ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./server.js",
    "groupTitle": "Recording"
  },
  {
    "type": "delete",
    "url": "/recording/:id",
    "title": "Delete recording",
    "name": "Delete_recording",
    "group": "Recording",
    "description": "<p>Delete recording</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Recording id (_id field of /recordings)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./server.js",
    "groupTitle": "Recording"
  },
  {
    "type": "get",
    "url": "/recording/start",
    "title": "Start recording",
    "name": "Start",
    "group": "Recording",
    "description": "<p>Start recording (persisting tracker data and counting data to db)</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./server.js",
    "groupTitle": "Recording"
  },
  {
    "type": "get",
    "url": "/recording/stop",
    "title": "Stop recording",
    "name": "Stop",
    "group": "Recording",
    "description": "<p>Stop recording</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./server.js",
    "groupTitle": "Recording"
  },
  {
    "type": "get",
    "url": "/recording/:id/tracker",
    "title": "Tracker data",
    "name": "Tracker_data",
    "group": "Recording",
    "description": "<p>Get tracker data for a specific recording <strong>(can be very large as it returns all the data for each frame)</strong></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Recording id (_id field of /recordings)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "[\n {\n        \"_id\": \"5cc3400252340f451cd7397c\",\n        \"recordingId\": \"5cc3400252340f451cd7397a\",\n        \"timestamp\": \"2019-04-26T17:29:38.301Z\",\n        \"objects\": [\n          {\n            \"id\": 5,\n            \"x\": 351,\n            \"y\": 244,\n            \"w\": 68,\n            \"h\": 51,\n            \"bearing\": 350,\n            \"name\": \"car\"\n          },\n          {\n            \"id\": 6,\n            \"x\": 450,\n            \"y\": 292,\n            \"w\": 78,\n            \"h\": 67,\n            \"bearing\": 28,\n            \"name\": \"car\"\n          }\n        ]\n      }\n    ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./server.js",
    "groupTitle": "Recording"
  },
  {
    "type": "get",
    "url": "/recordings?offset=:offset&limit=:limit",
    "title": "List",
    "name": "List_recordings",
    "group": "Recordings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "20",
            "description": "<p>Limit of recordings in the response</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>Skipped recordings</p>"
          }
        ]
      }
    },
    "description": "<p>Get list of all recording ordered by latest date</p>",
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n  \"offset\": 0,\n       \"limit\": 1,\n       \"total\": 51,\n       \"recordings\": [\n         {\n           \"_id\": \"5cc3400252340f451cd7397a\",\n           \"dateStart\": \"2019-04-26T17:29:38.190Z\",\n           \"dateEnd\": \"2019-04-26T17:32:14.563Z\",\n           \"areas\": {\n             \"94afa4f8-1d24-4011-a481-ad3036e959b4\": {\n               \"color\": \"yellow\",\n               \"location\": {\n                 \"point1\": {\n                   \"x\": 241,\n                   \"y\": 549\n                 },\n                 \"point2\": {\n                   \"x\": 820,\n                   \"y\": 513\n                 },\n                 \"refResolution\": {\n                   \"w\": 1280,\n                   \"h\": 666\n                 }\n               },\n               \"name\": \"test\",\n               \"computed\": {\n                 \"a\": 0.06721747654390149,\n                 \"b\": -609.7129253605938,\n                 \"xBounds\": {\n                   \"xMin\": 241,\n                   \"xMax\": 820\n                 }\n               }\n             }\n           },\n           \"counterSummary\": {\n             \"94afa4f8-1d24-4011-a481-ad3036e959b4\": {\n               \"car\": 111,\n               \"_total\": 111\n             }\n           },\n           \"trackerSummary\": {\n             \"totalItemsTracked\": 566\n           }\n         }\n       ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./server.js",
    "groupTitle": "Recordings"
  },
  {
    "type": "get",
    "url": "/tracker/sse",
    "title": "Tracker data",
    "name": "Data",
    "group": "Tracker",
    "description": "<p>From the browser, you can open a SSE (Server side event) connection to get data from Opendatacan on each frame.</p> <p><strong>How to open an SSE connexion</strong></p> <p><code>let eventSource = new EventSource(&quot;/tracker/sse&quot;)</code></p> <p><strong>How to get data on each frame</strong></p> <p><code>eventSource.onmessage = (msg) =&gt; { let message = JSON.parse(msg.data); }</code></p> <p>Then it works like websocket but only the server can push data.</p> <p><em>Limitation: Only support one client at a time, if another one connect, the first SSE connection is closed</em></p> <p>More doc on server side event, read <a href=\"https://medium.com/axiomzenteam/websockets-http-2-and-sse-5c24ae4d9d96\">What are SSE : Server Side Events</a></p>",
    "success": {
      "examples": [
        {
          "title": "Frame example (once parsed to JSON):",
          "content": "{\n       \"trackerDataForLastFrame\": {\n         \"frameIndex\": 4646,\n         \"data\": [\n           {\n             \"id\": 5,\n             \"x\": 340,\n             \"y\": 237,\n             \"w\": 60,\n             \"h\": 45,\n             \"bearing\": 103,\n             \"name\": \"car\",\n             \"countingDeltas\": {\n               \"94afa4f8-1d24-4011-a481-ad3036e959b4\": 349.8589833356673\n             }\n           },\n           {\n             \"id\": 6,\n             \"x\": 449,\n             \"y\": 306,\n             \"w\": 95,\n             \"h\": 72,\n             \"bearing\": 219,\n             \"name\": \"car\",\n             \"countingDeltas\": {\n               \"94afa4f8-1d24-4011-a481-ad3036e959b4\": 273.532278392382\n             }\n           }\n         ]\n       },\n       \"counterSummary\": {\n         \"94afa4f8-1d24-4011-a481-ad3036e959b4\": {\n           \"car\": 43,\n           \"_total\": 43\n         }\n       },\n       \"trackerSummary\": {\n         \"totalItemsTracked\": 222\n       },\n       \"videoResolution\": {\n         \"w\": 1280,\n         \"h\": 720\n       },\n       \"appState\": {\n         \"yoloStatus\": {\n           \"isStarting\": true,\n           \"isStarted\": false\n         },\n         \"isListeningToYOLO\": true,\n         \"recordingStatus\": {\n           \"isRecording\": true,\n           \"currentFPS\": 13,\n           \"recordingId\": \"5cc3400252340f451cd7397a\",\n           \"dateStarted\": \"2019-04-26T17:29:38.190Z\"\n         }\n       }\n     }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./server.js",
    "groupTitle": "Tracker"
  },
  {
    "type": "get",
    "url": "/webcam/resolution",
    "title": "Resolution",
    "name": "Resolution",
    "group": "Webcam",
    "description": "<p>Limitation: Only available after YOLO has started</p>",
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "{\n  \"w\": 1280,\n  \"h\": 720\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./server.js",
    "groupTitle": "Webcam"
  },
  {
    "type": "get",
    "url": "/webcam/stream",
    "title": "Stream (MJPEG)",
    "name": "Stream",
    "group": "Webcam",
    "description": "<p>Limitation: Only available after YOLO has started</p> <p>This endpoint streams the webcam as a MJPEG stream. (streams the sequence of JPEG frames over HTTP). The TCP connection is not closed as long as the client wants to receive new frames and the server wants to provide new frames Only support one client at a time, if another one connect, the first HTTP connection is closed</p> <p>More on MJPEG over HTTP: https://en.wikipedia.org/wiki/Motion_JPEG#M-JPEG_over_HTTP</p>",
    "version": "0.0.0",
    "filename": "./server.js",
    "groupTitle": "Webcam"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./apidoc/main.js",
    "group": "_home_tdurand_Documents_lab_opendatacam_apidoc_main_js",
    "groupTitle": "_home_tdurand_Documents_lab_opendatacam_apidoc_main_js",
    "name": ""
  }
] });
