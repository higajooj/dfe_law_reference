<!-- p.07 -->

# 2.1.3 Consulta de Alíquotas por Trecho

Get /Aliquotas/trecho/{codigoTrecho}/dataReferencia/{dataReferencia}

### Descrição

Consulta todas as alíquotas de um determinado trecho em uma data específica.

### Endpoint: GetAliquotasTrecho

URL:

```
GET /Aliquotas/trecho/{codigotrecho}/dataReferencia/{dataReferencia}
```

<!-- p.08 -->

### Parâmetro

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| codigoTrecho | string | Sim | O código do trecho para o qual as alíquotas devem ser recuperadas |
| dataReferencia | date | Sim | Data de referência para a recuperação das alíquotas. |

### Exemplo de Requisição

```
GET /Aliquotas/trecho/xxxxxxx/dataReferencia/aaaa-mm-dd
```

### Retornos

#### Sucesso (200 OK)

Retorna um objeto Resultado contendo uma lista dos municípios com extensão, percentual extensão, alíquota ISS município, alíquota ISS efetiva por município e alíquota IIS efetiva total do trecho.

<!-- REVISAR p.08: JSON de exemplo malformado na fonte: "dados" abre um array "[" e logo em seguida aparece outro "dados": { sem fechar o array -->

```json
{
    "sucesso": true,
    "dados": [
     "dados": {
     "cnpj": "",
     "codigoContrato": "",
     "nomeContrato": "",
     "codigoTrecho": "0000100",
     "nomeTrecho": "oaafae",
     "situacaoTrecho": 0,
     "nomeRodovia": "teste1",
     "extensaoTrecho": 90.09,
     "percentualAcumulado": 100,
     "aliquotaEfetivaTotal": 2,
     "aliquotas": [
      {
          "id": 0,
          "codigoMunicipio": "3106200",
          "nomeMunicipio": "Belo Horizonte / MG",
          "extensao": 10,
          "percentual": 11.1,
          "aliquota": 2,
          "aliquotaEfetiva": 0.222,
          "situacao": 0,
          "dhInicioVigencia": "0001-01-01",
          "dhFimVigencia": null
      },
      {
          "id": 0,
          "codigoMunicipio": "3118601",
          "nomeMunicipio": "Contagem / MG",
          "extensao": 45,
          "percentual": 49.95,
          "aliquota": 2,
          "aliquotaEfetiva": 0.999,
          "situacao": 0,
          "dhInicioVigencia": "0001-01-01",
          "dhFimVigencia": null
      },
      {
          "id": 0,
          "codigoMunicipio": "3100104",
          "nomeMunicipio": "Abadia dos Dourados / MG",
          "extensao": 35.09,
          "percentual": 38.95,
          "aliquota": 2,
          "aliquotaEfetiva": 0.779,
          "situacao": 0,
          "dhInicioVigencia": "0001-01-01",
          "dhFimVigencia": null
      }
        ]
    },
    "notificacoes": []
}
```

<!-- p.09 -->

#### Sem Dados (200 OK)

Quando não existem alíquotas para o município informado:

```json
{
    "sucesso": false,
    "dados": null,
    "notificacoes": [
        {
            "tipoNotificacao": 0,
            "codigo": "ALIQUOTAS_NAO_ENCONTRADAS",
            "mensagem": "Não foram encontradas alíquotas para o trecho e data informados."
        }
    ]
}
```

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

<!-- p.10 -->

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
