@echo off
REM ===================================================================
REM  run_ts_batch.bat
REM  Description:
REM    01_js_ts 폴더 하위에 있는 모든 .ts 파일을 찾아서 순차적으로 실행합니다.
REM    ts-node-esm 또는 ts-node 로더를 사용해 TypeScript를 런타임에 트랜스파일·실행합니다.
REM    각 파일 실행 전·후에 로그를 남깁니다.
REM ===================================================================

REM (1) 루트에서 작업 디렉터리를 01_js_ts로 이동
pushd "%~dp0" 2>nul
if errorlevel 1 (
    echo [Error] NotFound "01_js_ts" %~dp0\01_js_ts
    goto :EOF
)

echo.
echo ===================================================================
echo    TS Batch Execution Start: "01_js_ts"
echo ===================================================================
echo.

REM (2) 01_js_ts 폴더부터 하위 폴더를 재귀 탐색하여 모든 .ts 파일을 순차적으로 실행
for /R "%CD%" %%F in (*.ts) do (
    echo -------------------------------------------------------------------
    echo [RUNNING TS] %%~nxF
    echo   Path: %%F
    echo -------------------------------------------------------------------
    REM → ts-node-esm (ESM loader) 를 사용
    npx ts-node-esm "%%F"
    if errorlevel 1 (
        echo [ERROR] Execution Error: %%F
    ) else (
        echo [FINISHED] TS Execution Success: %%~nxF
    )
    echo.
)

echo ===================================================================
echo    TS Batch Execution Complete
echo ===================================================================
echo.

REM (3) 원래 디렉터리로 복귀
popd

pause
