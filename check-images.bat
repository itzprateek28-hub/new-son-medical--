@echo off
echo.
echo ========================================
echo   NEW SON MEDICAL STORE
echo   Image Checker
echo ========================================
echo.
echo Checking for required images...
echo.

set "missing=0"

if exist "images\store-front.jpg" (
    echo [OK] store-front.jpg found
) else (
    echo [MISSING] store-front.jpg
    set /a missing+=1
)

if exist "images\store-front-customers.jpg" (
    echo [OK] store-front-customers.jpg found
) else (
    echo [MISSING] store-front-customers.jpg
    set /a missing+=1
)

if exist "images\store-signage.jpg" (
    echo [OK] store-signage.jpg found
) else (
    echo [MISSING] store-signage.jpg
    set /a missing+=1
)

if exist "images\medicine-shelves.jpg" (
    echo [OK] medicine-shelves.jpg found
) else (
    echo [MISSING] medicine-shelves.jpg
    set /a missing+=1
)

if exist "images\store-logo.jpg" (
    echo [OK] store-logo.jpg found
) else (
    echo [MISSING] store-logo.jpg
    set /a missing+=1
)

echo.
echo ========================================
if %missing%==0 (
    echo   ALL IMAGES FOUND! Gallery is ready!
) else (
    echo   %missing% image(s) missing
    echo   Please add the missing images to the images folder
)
echo ========================================
echo.
pause
