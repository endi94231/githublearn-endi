const user_create_schema = {
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "default": {},
    "title": "Root Schema",
    "required": [
        "name",
        "job",
        "id",
        "createdAt"
    ],
    "properties": {
        "name": {
            "type": "string",
            "default": "",
            "title": "The name Schema",
            "examples": [
                "morpheus"
            ]
        },
        "job": {
            "type": "string",
            "default": "",
            "title": "The job Schema",
            "examples": [
                "leader"
            ]
        },
        "id": {
            "type": "string",
            "default": "",
            "title": "The id Schema",
            "examples": [
                "460"
            ]
        },
        "createdAt": {
            "type": "string",
            "default": "",
            "title": "The createdAt Schema",
            "examples": [
                "2022-08-28T08:44:48.277Z"
            ]
        }
    },
    "examples": [{
        "name": "morpheus",
        "job": "leader",
        "id": "460",
        "createdAt": "2022-08-28T08:44:48.277Z"
    }]
}