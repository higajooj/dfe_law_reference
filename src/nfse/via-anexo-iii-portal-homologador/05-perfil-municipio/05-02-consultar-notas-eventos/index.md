<!-- p.19 -->

# 5.2 Fluxo para homologação – Consultar Notas / Eventos do Município

```mermaid
flowchart TD
    I(["Início"]) --> A["Consultar NSU"]
    A --> B["Enviar consulta"]
    B --> C{"Documento encontrado?"}
    C -- "Sim" --> D["Resultado da consulta"]
    D --> E(["Fim"])
    C -- "Não" --> F["Não encontrada"]
    F --> E
```

*Informe o Número Sequencial Único (NSU) utilizado para identificar o ponto inicial da recuperação dos documentos.*
