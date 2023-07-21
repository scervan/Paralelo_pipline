pipeline {
    agent any
 
    tools {nodejs "node"}
 
    stages {
 
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent2_1"
                    }
                    steps {
                        git url: 'https://github.com/scervan/Paralelo_pipline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 3ddcd72e-272a-4cfc-8b99-7bbb6a8bc1f4  --parallel'
                    
                    }
                }
 
                stage('Slave 2') {
                    agent {
                        label "Agent2_2"
                    }
                    steps {
                        git url: 'https://github.com/scervan/Paralelo_pipline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 3ddcd72e-272a-4cfc-8b99-7bbb6a8bc1f4  --parallel'
                    
                    }
                }
 
                stage('Slave 3') {
                    agent {
                        label "Agent2_3"
                    }
                    steps {
                        git url: 'https://github.com/scervan/Paralelo_pipline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 3ddcd72e-272a-4cfc-8b99-7bbb6a8bc1f4  --parallel'
                    
                    }
                }
 
                stage('Slave 4') {
                    agent {
                        label "Agent2_4"
                    }
                    steps {
                        git url: 'https://github.com/scervan/Paralelo_pipline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 3ddcd72e-272a-4cfc-8b99-7bbb6a8bc1f4  --parallel'
                    
                    }
                }
 
               
 
                
   
                  
            }
 
             
        }
 
    }
            
}