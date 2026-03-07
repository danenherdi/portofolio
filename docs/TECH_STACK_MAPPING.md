# Tech Stack Mapping & Categorization

This document maps the specific tools and technologies to their respective domains within the portfolio showcase. The categories align with the skills highlighted in the resume.

## 1. Cloud & Infrastructure
*Focus: Scalability, Cloud Architecture, Container Orchestration.*

| Technology | Role / Usage in Portfolio |
| :--- | :--- |
| **GCP / AWS** | Primary cloud providers. Experience with GKE, Cloud Run, EC2. |
| **Kubernetes (K8s)** | Container Orchestration. Showcase: Managing the 6-microservice architecture and scaling optimizations. |
| **Docker** | Containerization for all backend services. |
| **Terraform** | Infrastructure as Code for provisioning and managing cloud resources. |
| **OpenFaaS** | Serverless capabilities and function deployments. |

## 2. CI/CD & Automation
*Focus: Automated Pipelines, Deployment Strategy, Code Quality.*

| Technology | Role / Usage in Portfolio |
| :--- | :--- |
| **GitHub Actions** | Primary automation pipeline for CI/CD workflows, testing, and deployment. |
| **Cloud Build** | GCP-native CI/CD used extensively in the Bangkit Capstone project. |
| **Artifact Registry** | Secure storage and management of Docker container images. |

## 3. Monitoring & QA
*Focus: System Reliability, Performance Tuning, Load Testing.*

| Technology | Role / Usage in Portfolio |
| :--- | :--- |
| **Prometheus** | Real-time metrics collection for the Go-based policy decision engine and microservices. |
| **Grafana** | Visualization dashboard for tracking system throughput, latency, CPU usage, etc. |
| **K6 Load Testing** | High-performance load testing tool used to validate the 35-181% throughput boost in the CSL research. |

## 4. Backend & Programming
*Focus: High-Performance Services, APIs, System Utilities.*

| Technology | Role / Usage in Portfolio |
| :--- | :--- |
| **Go (Golang)** | Development of the real-time policy decision engine with 10-second evaluation cycles. |
| **Kotlin / Java** | Backend architecture using Ktor (Kotlin) for the Iro Art freelance project. |
| **JS/TS, Python, Rust** | Versatile programming languages for scripting, full-stack work, and performance-critical modules. |
| **SQL** | Relational database querying and management. |

## 5. Databases
*Focus: Data Modeling, Storage Solutions, NoSQL & Relational.*

| Technology | Role / Usage in Portfolio |
| :--- | :--- |
| **MongoDB** | Primary NoSQL database (MongoDB Atlas) optimized for the Iro Art backend. |
| **PostgreSQL** | Primary relational database for structured, schema-strict data. |
| **Firestore** | Real-time NoSQL document database used in GCP ecosystem (Bangkit Capstone). |
| **Redis** | High-performance caching layer (relevant to the Intelligent Adaptive Caching research). |

## 6. Frontend Ecosystem (The Portfolio Itself)
*   **Framework**: Astro 5 (Performance First, Content Collections).
*   **Interactivity**: Svelte 5 (Reactivity, minimal boilerplate).
*   **Styling**: Tailwind CSS 4 (Custom Tech Cloud Minimalism theme).
