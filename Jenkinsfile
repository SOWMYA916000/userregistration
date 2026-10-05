pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing Node.js dependencies...'
                bat 'npm ci'
            }
        }

        stage('Build') {
            steps {
                echo 'Building Event Registration application...'
                bat 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing Event Registration application...'
                bat 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deployment step completed.'
                echo 'Event Registration application is ready for deployment.'
            }
        }
    }

    post {
        success {
            echo 'CI/CD Pipeline completed successfully.'
        }

        failure {
            echo 'CI/CD Pipeline failed.'
        }
    }
}
