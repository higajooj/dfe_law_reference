<!-- p.6 -->
# 5. Serviço de Manutenção do CSC NFC-e

O Serviço de Manutenção do CSC NFC-e é o serviço oferecido pelo *Web Service* da SEFAZ autorizadora para atualização do repositório de CSC NFC-e. A utilização de cada uma das funcionalidades oferecidas pelo serviço deverá ser feita por meio da especificação do tipo de operação no XML de requisição.

```mermaid
flowchart LR
    subgraph C["Contribuinte"]
        CL["Cliente NFCe"]
    end
    subgraph S["Secretaria de Fazenda Estadual"]
        WS["Web Service CscNFCe<br/>(admCscNFCe)"]
        PR["Processamento<br/>Aplicação Ambiente Autorizador"]
    end
    CL -- "Envio" --> WS
    WS -- "Retorno" --> CL
    WS -- "Proc." --> PR
    PR -- "Ret." --> WS
```

*Figura: fluxo de envio e retorno entre o Cliente NFCe e o Web Service CscNFCe (admCscNFCe) da Secretaria de Fazenda Estadual. Redesenhado em mermaid a partir do esquema original.*
