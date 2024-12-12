# Use the latest PHP image as the base
FROM php:latest

# Install the mysqli extension
RUN docker-php-ext-install mysqli

# Set up a default command to run the PHP server
CMD ["php", "-S", "0.0.0.0:80", "-t", "/var/www/html"]
