@echo off
REM ===================================================================
REM  run_js_firstlevel_only.bat
REM  Description:
REM    01_js_ts 폴더의 1단계 서브폴더만 탐색하여, 해당 폴더 안에 있는 main.js 파일을 실행합니다.
REM    node_modules 등 불필요한 폴더로 들어가지 않으며, 루트에는 main.js가 없다는 전제하에 작성되었습니다.
REM ===================================================================

REM (1) 작업 디렉터리를 01_js_ts로 이동
pushd "%~dp0" 2>nul
if errorlevel 1 (
    echo [Error] NotFound "01_js_ts" 폴더. 경로: %~dp0\01_js_ts
    goto :EOF
)

echo.
echo ===================================================================
echo    JS Batch Execution Start (Depth=1 Only): "01_js_ts"
echo ===================================================================
echo.

REM (2) 01_js_ts 폴더의 1단계 서브폴더만 순회하여 main.js가 있으면 실행
for /D %%D in ("%CD%\*") do (
    REM 불필요한 폴더(node_modules 등)를 제외하려면 아래와 같이 조건을 추가할 수 있습니다.
    if /I "%%~nD"=="node_modules" (
        echo [SKIP] node_modules folder skip
        echo.
        goto :continue_folder
    )

    REM 각 1단계 서브폴더 안에 main.js가 있는지 확인
    if exist "%%~fD\main.js" (
        echo -------------------------------------------------------------------
        echo [RUNNING JS] %%~nD\main.js (Subfolder)
        echo   Path: %%~fD\main.js
        echo -------------------------------------------------------------------
        node "%%~fD\main.js"
        if errorlevel 1 (
            echo [ERROR] Execution Error: %%~fD\main.js
        ) else (
            echo [FINISHED] JS Execution Success: %%~nD\main.js (Subfolder)
        )
        echo.
    )

    :continue_folder
)

echo ===================================================================
echo    JS Batch Execution Complete
echo ===================================================================
echo.

REM (3) 원래 디렉터리로 복귀
popd

pause
