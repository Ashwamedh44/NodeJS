pipeline{
    agent any

    stages{
        stage("build")
        {
            steps{
                bat "npm run build"
            }
        }
        stage ("run"){
            steps{
                bat "npm run"
            }
        }
    }
    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
