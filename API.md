FORMAT: 1A

# Operations API
TODO: add content here

# Group API routes

## Operation [/operations/{id}]
This resource represents one particular operation identified by its **id**.

+ Parameters
    + id (string) ... ID of the operation.

+ Model (application/json)

    ```javascript
    {
        "id": "0123456789abcdef01234567",
        "creationTime": "1970-01-01T00:00:00.000Z",
        "url": [],
        "state": "PUBLISHED",
        ...
    }
    ```

### Retrieve an operation [GET]
Retrieve an operation by its **id**.

+ Response 200

    [Operation][]

### Update an operation [PUT]
Update an operation.

+ Request (application/json)

    ```javascript
    {
        "url": [],
        "state": "PUBLISHED",
        ...
    }
    ```

+ Response 200

    [Operation][]

### Delete an operation [DELETE]
Delete an operation. **Warning:** This action **permanently** removes the operation from the database.

+ Response 204

## Operations collection [/operations]
This resource represents the collection of created operations.

+ Model (application/json)

    ```javascript
    [
        {
            "id": "0123456789abcdef0123456789",
            "creationTime": "1970-01-01T00:00:00.000Z",
            "url": [],
            "state": "PUBLISHED",
            ...
        },
        ...
    ]
    ```

### Retrieve all operations [GET]
Retrieve all the created operations.

+ Response 200

    [Operations collection][]

### Create a new operation [POST]
Create a new operation.

+ Request (application/json)
    
    ```javascript
    {
        "url": [],
        "state": "PUBLISHED",
        ...
    }
    ```

+ Response 201

    [Operation][]



[Operations collection]: #operations-collection-operations
[Operation]: #operation-operationsid