# 2.1.2 Consulta de Alíquotas por Município

### Descrição

Consulta as alíquotas de **todos os trechos associados a um município específico**.

<!-- p.06 -->

### Endpoint: GetAliquotasMunicipioPorTrecho

URL:

```
GET /Aliquotas/municipio/{codigoMunicipio}
```

### Parâmetro

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| codigoMunicipio | string | Sim | Código identificador do município |

### Exemplo de Requisição

```
GET /Aliquotas/municipio/xxxxxx
```

### Retornos

#### Sucesso (200 OK)

Retorna um objeto Resultado contendo uma lista de alíquotas por trecho do município.

```json
{
    "sucesso": true,
    "dados": [
       {
         "cnpj": "12345678000195",
         "codigoContrato": "CONT001",
         "nomeContrato": "Contrato Exemplo",
         "codigoTrecho": "TR001",
         "nomeTrecho": "Trecho Exemplo",
         "situacaoTrecho": 1,
         "aliquotas": [
           {
             "codigoMunicipio": "1234567",
             "nomeMunicipio": "Município Exemplo",
             "extensao": 15.5,
             "percentual": 0.25,
             "aliquota": 0.05,
             "aliquotaEfetiva": 0.0125,
             "situacao": 1,
             "dhInicioVigencia": "2024-01-01",
             "dhFimVigencia": null
           }
         ]
       }
    ],
    "notificacoes": []
}
```

#### Sem Dados (200 OK)

Quando não existem alíquotas para o município informado:

```json
{
 "sucesso": false,
 "dados": null,
 "notificacoes": [
 {
 "tipoNotificacao": 1,
 "codigo": "SEM_ALIQUOTAS",
 "mensagem": "Não existem alíquotas para o município informado."
 }
 ]
}
```

<!-- p.07 -->

### Estrutura de dados

#### Resultado

| Campo | Tipo | Descrição |
|---|---|---|
| sucesso | boolean | Indica se a operação foi bem-sucedida |
| dados | T | Dados retornados pela operação |
| notificacoes | array | Lista de notificações/erros |

#### AliquotasTrechoMunicipioDto

| Campo | Tipo | Descrição |
|---|---|---|
| cnpj | string | CNPJ da concessionária |
| codigoContrato | string | Código identificador do contrato |
| nomeContrato | string | Nome do contrato |
| codigoTrecho | string | Código identificador do trecho |
| nomeTrecho | string | Nome do trecho |
| situacaoTrecho | integer | Situação do trecho (1=Ativo) |
| aliquotas | array | Lista de frações de rateio |

#### FracaoRateioDto

| Campo | Tipo | Descrição |
|---|---|---|
| codigoMunicipio | string | Código do município |
| nomeMunicipio | string | Nome do município |
| extensao | decimal | Extensão em quilômetros |
| percentual | decimal | Percentual de participação |
| aliquota | decimal | Alíquota base |
| aliquotaEfetiva | decimal | Alíquota efetiva calculada |
| situacao | integer | Situação (1=Ativo) |
| dhInicioVigencia | date | Data de início da vigência |
| dhFimVigencia | date | Data de fim da vigência (opcional) |
