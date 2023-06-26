pipeline {
    agent any

    stages {
        stage('Clonar Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/vicyak/testes-e2e-ebac-shop.git'
            }
        }
        stage('Instalar depend') {
            steps {
                bat 'npm install'
            }
        }
            stage('Executar testes') {
            steps {
              bat 'npx cypress open'
            }
    }
}
}
