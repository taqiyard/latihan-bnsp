pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t website-bnsp .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                docker stop website-bnsp || true
                docker rm website-bnsp || true
                '''
            }
        }

        stage('Run New Container') {
            steps {
                sh 'docker run -d -p 80:3000 --name website-bnsp website-bnsp'
            }
        }
    }
}
