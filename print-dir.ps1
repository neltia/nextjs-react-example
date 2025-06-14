Function Show-Tree {
    param(
        [string]$Path = '.',
        [int]   $MaxDepth = 2,
        [int]   $Level = 0
    )
    if ($Level -ge $MaxDepth) { return }

    Get-ChildItem -Path $Path -Directory | ForEach-Object {
        # indent: Level * 2 spaces
        $indent = ' ' * ($Level * 2)
        Write-Host "$indent|-- $($_.Name)"
        # 재귀 호출
        Show-Tree -Path $_.FullName -MaxDepth $MaxDepth -Level ($Level + 1)
    }
}

# 호출 예시 (현재 폴더 기준, 2단계)
Show-Tree -Path . -MaxDepth 2
