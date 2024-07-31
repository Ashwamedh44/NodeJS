pipeline{
    agent any

    stages{
        stage("build")
        {
            steps{
                bat "node app.js"
            }
        }
        // stage ("run"){
        //     steps{
        //         bat "npm run"
        //     }
        // }
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
