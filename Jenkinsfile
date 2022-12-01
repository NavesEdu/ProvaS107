pipeline {
    agent any

    environment {
        EMAIL = "eduardo.naves@ges.inatel.br"
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh '''
                    cd seminario/
                    npm install
                    npm i jasmine
                    jasmine init
                    npm i express
                    node server.js
                   '''
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh '''
                    cd seminario/
                    npm test
                   '''
                  // archiveArtifacts 'Aula-GitHub-Actions/target/site/' 
            }
        }
        stage('Notification') {
            steps {
                echo 'Sending email....'
                sh '''
                    cd scripts/
                    chmod 775 *
                    ./jenkins.sh ${EMAIL}
                   '''
            }
        }
    }
}