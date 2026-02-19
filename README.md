
# PROYECTO FINAL BACKEND - ARQUITECTURA PROFESIONAL

## Arquitectura Implementada
- DAO + Repository Pattern
- DTO para evitar exposición de datos sensibles
- Middleware de autorización por roles
- Estrategia Passport JWT 'current'
- Sistema de recuperación de contraseña con expiración (1 hora)
- Mailing con Nodemailer
- Modelo Ticket con lógica de compra profesional

## Roles
- admin → CRUD productos
- user → carrito y compras

## Seguridad
- JWT en cookies
- Expiración de reset token
- Prevención reutilización contraseña

## Ejecutar
npm install
npm run dev

