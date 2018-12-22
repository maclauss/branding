FROM davidcaste/debian-oracle-java

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD build/libs/branding-0.0.1-SNAPSHOT.jar /app

# Make port 443 available to the world outside this container
EXPOSE 443

# Run app.py when the container launches
CMD ["java", "-Dspring.profiles.active=${environment}", "-jar", "/app/branding-0.0.1-SNAPSHOT.jar"]
