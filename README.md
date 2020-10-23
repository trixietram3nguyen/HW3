# HW3 - COSC4370
Name: Trixie Tram Nguyen, PSID: 1518295

1. Objective: Practice 3D viewing and go deeper into OpenGL by implementing the Phong shader model.
2. Environment: Run and compile on Visual Studio 2019 on Windows with GLUT, GLEW, GLFW, and GLM libraries set up. Screenshot the result of each step of the shading (such as ambient, diffuse, and specular) to get the final result phong relection then save as png file.
3. Project details: To be able to write the vertex and fragment shaders for the Phong model to shae a simple cube with the geometry already defined in main.cpp. Camera.h and Shader.h also have been provided to produce the desire images. Need to develope the phong.frag and phong.vs, along with completing code in Camera.h to return the view matrix calculated by using Eular Angles and LookAt Matrix. In additional, main.cpp also need to be complete by generate all uniform parameter such as cube color, light color and etc. so that it could be pass into shaders. MVP (model view projection) matrix also need to be complete to pass into shaders by rotating the cube using Model matrix. Be able to use function glGetUniformLocation(), and glUniform3f, glUniformMatrix4fv to pass uniform value. Four of the images that need to be produce are the image rendered by the ambient light only, image rendered by the diffuse light only, image rendered by the specular light only, and lastly the phong shading model which is the result of the other 3 previous images.
4. Explaination of completed code that need to be added: starting from main.cpp 
5. Result: 
6. Reference: 
