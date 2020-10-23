
#version 330 core
out vec4 color;

in vec3 FragPosition;
in vec3 Normal;

uniform vec3 lightPosition;
uniform vec3 viewPosition;
uniform vec3 lightColor;
uniform vec3 objectColor;

void main()
{
    //ambient
    float ambientStrength = 0.1;
    vec3 ambient = ambientStrength*lightColor;

    //diffuse
    vec3 norm = normalize(Normal);
    vec3 lightDir = normalize(lightPosition-FragPosition);
    float diff = max(dot(norm, lightDir), 0.0);
    vec3 diffuse = diff*lightColor; 

    //specular
    float specularStrength = 0.5;
    vec3 viewDir = normalize(viewPosition-FragPosition);
    vec3 reflectDir = reflect(-lightDir, norm);
    float spec = pow(max(dot(viewDir, reflectDir), 0.0), 32);
    vec3 specular = specularStrength*spec*lightColor;

    //final result, phong reflectiom
    color = vec4((ambient+diffuse+specular)*objectColor, 1.0);
}