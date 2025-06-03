@echo off
REM ===================================================================
REM  run_ts_firstlevel_fixed.bat
REM  Description:
REM    01_js_ts 폴더의 1단계 서브폴더만 탐색하여, 해당 폴더 안에 있는 main.ts 파일을 실행합니다.
REM    node_modules 등 불필요한 폴더는 완전히 제외합니다.
REM    ts-node-esm을 사용하여 TypeScript를 런타임에 트랜스파일·실행하고, 실행 전후에 로그를 남깁니다.
REM ===================================================================

REM (1) 작업 디렉터리를 01_js_ts로 이동
pushd "%~dp0" 2>nul
if errorlevel 1 (
    echo [Error] NotFound "01_js_ts" 폴더. 경로: %~dp0\01_js_ts
    goto :EOF
)

echo.
echo ===================================================================
echo    TS Batch Execution Start (Depth=1 Only): "01_js_ts"
echo ===================================================================
echo.

REM (2) 01_js_ts 폴더 내 1단계 서브폴더만 순회하여 main.ts가 있으면 실행
for /D %%D in ("%CD%\*") do (
    REM -------------------------------------------------
    REM node_modules 폴더는 완전히 건너뜁니다. (대소문자 구분 없이 검사)
    REM -------------------------------------------------
    if /I "%%~nD"=="node_modules" (
        echo [SKIP] node_modules folder skip
        echo.
        goto :continue_folder
    )

    REM 1단계 서브폴더 경로: %%~fD, 폴더명: %%~nD
    if exist "%%~fD\main.ts" (
        echo -------------------------------------------------------------------
        echo [RUNNING TS] %%~nD\main.ts (Subfolder)
        echo   Path: %%~fD\main.ts
        echo -------------------------------------------------------------------
        ts-node "%%~fD\main.ts"
        if errorlevel 1 (
            echo [ERROR] Execution Error: %%~fD\main.ts
        ) else (
            echo [FINISHED] TS Execution Success: %%~nD\main.ts (Subfolder)
        )
        echo.
    )

    :continue_folder
)

echo ===================================================================
echo    TS Batch Execution Complete
echo ===================================================================
echo.

REM (3) 원래 디렉터리로 복귀
popd

pause
