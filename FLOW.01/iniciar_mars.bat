@echo off
title PROJETO MARS - Servidor + Mobile
cls

echo ==========================================
echo   INICIANDO SERVIDOR DO PROJETO MARS
echo ==========================================

echo.

:: Pega IP corretamente (sem espaços)
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /i "IPv4" ^| findstr /v "127.0.0.1"') do (
    set ip=%%a
)

:: Remove espaços
set ip=%ip: =%

echo SEU ENDERECO PARA CELULAR:
echo http://%ip%:3000
echo.

echo ------------------------------------------

:: Abre no navegador
start msedge http://localhost:3000

:: Entra na pasta do servidor
cd server

:: Inicia com nodemon
npm run dev

pause