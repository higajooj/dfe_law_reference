<!-- p.07 -->

# 4.2 Fluxo para homologação – Gerar e Enviar NFS-e Via

```mermaid
flowchart TD
    I(["Início"]) --> A["Gerar XML NFS-e Via"]
    A --> B{"Editar XML NFS-e Via?"}
    B -- "Sim" --> C["Editar XML NFS-e Via"]
    C --> D["Enviar NFS-e Via"]
    B -- "Não" --> D
    D --> E["Mensagem de retorno do envio + protocolo"]
    E --> F(["Fim"])
```

*Para iniciar o processo de geração de NFS-e Via é necessário existir o cadastro do contrato / trecho para o CNPJ utilizado no perfil.*

*Esse protocolo poderá ser usado para consultar o resultado da validação da NFS-e Via.*
