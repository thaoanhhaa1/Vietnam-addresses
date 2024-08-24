# Contributing to RESTful API for Vietnam Administrative Divisions

## Introduction
Thank you for considering contributing to the RESTful API for Vietnam Administrative Divisions. This project aims to provide a comprehensive and accessible Node.js RESTful API that offers endpoints for retrieving information about administrative divisions in Vietnam, including cities, districts, and wards.

## Features
- Get a list of all cities in Vietnam.
- Get a list of all districts in Vietnam.
- Get a list of districts within a specific city.
- Get a list of all wards in Vietnam.
- Get a list of wards within a specific district.

## Endpoints

### 1. Get Cities
- **URL:** `/api/v1/cities`
- **Method:** GET
- **Description:** Retrieves a list of all cities in Vietnam.
- **Response Example:**
    ```json
    [
        {
            "_id": "106169285912657",
            "name": "An Giang"
        },
        {
            "_id": "106729332900600",
            "name": "Bà Rịa - Vũng Tàu"
        }
    ]
    ```

### 2. Get Districts
- **URL:** `/api/v1/districts`
- **Method:** GET
- **Description:** Retrieves a list of all districts in Vietnam.
- **Response Example:**
    ```json
    [
        {
            "_id": "106114908346097",
            "name": "Huyện An Phú",
            "parent_id": "106169285912657"
        },
        {
            "_id": "106270445756154",
            "name": "Huyện Châu Phú",
            "parent_id": "106169285912657"
        }
    ]
    ```

### 3. Get Districts by City
- **URL:** `/api/v1/districts?cityId={cityId}`
- **Method:** GET
- **Description:** Retrieves a list of districts within a specified city.
- **Parameters:**
    - `cityId`: ID of the city.
- **Response Example:**
    ```json
    [
        {
            "_id": "106114908346097",
            "name": "Huyện An Phú",
            "parent_id": "106169285912657"
        },
        {
            "_id": "106270445756154",
            "name": "Huyện Châu Phú",
            "parent_id": "106169285912657"
        }
    ]
    ```

### 4. Get Wards
- **URL:** `/api/v1/wards`
- **Method:** GET
- **Description:** Retrieves a list of all wards in Vietnam.
- **Response Example:**
    ```json
    [
        {
            "_id": "106415048701764",
            "name": "Thị Trấn Mãn Đức",
            "parent_id": "106731744533848"
        },
        {
            "_id": "106693533801859",
            "name": "Xã Gia Mô",
            "parent_id": "106731744533848"
        }
    ]
    ```

### 5. Get Wards by District
- **URL:** `/api/v1/wards?districtId={districtId}`
- **Method:** GET
- **Description:** Retrieves a list of wards within a specified district.
- **Parameters:**
    - `districtId`: ID of the district.
- **Response Example:**
    ```json
    [
        {
            "_id": "106415048701764",
            "name": "Thị Trấn Mãn Đức",
            "parent_id": "106731744533848"
        },
        {
            "_id": "106693533801859",
            "name": "Xã Gia Mô",
            "parent_id": "106731744533848"
        }
    ]
    ```

## Development
To contribute to the project, please follow these steps:

1. **Fork the repository.**
2. **Create a feature branch:**
    ```bash
    git checkout -b feature/your-feature
    ```
3. **Commit your changes:**
    ```bash
    git commit -am 'Add new feature'
    ```
4. **Push to the branch:**
    ```bash
    git push origin feature/your-feature
    ```
5. **Create a new Pull Request.**

## License
This project is licensed under the MIT License - see the LICENSE file for details.

We appreciate your contributions and efforts in improving this project! If you have any questions, feel free to open an issue or reach out.
