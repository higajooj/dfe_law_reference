<!-- p.04 -->

# 2.1.1 Obter Documentos NFS-e Via

### Descrição

Permite obter documentos (NFS-e Via) distribuídos por NSU para um município específico, valida o certificado digital do respectivo município e retorna os documentos conforme parâmetros de solicitação.

### Endpoint: ObterDocumentos

URL:

```
GET /Consulta/municípios
```

### Parâmetros

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| codigoMunicipio | integer | Sim | Código numérico do município |
| nsu | long | Sim | Número Sequencial Único a partir do qual buscar |
| obterLote | boolean | Sim | Indica se deve obter o lote completo |

### Exemplo de Requisição

```
GET /Consulta/municipios?codigoMunicipio=xxxxxxx&nsu=xxx&obterLote=true
```

### Retornos

#### Sucesso (200 OK)

Retorna um objeto Resultado contendo uma lista de documentos distribuídos por NSU.

<!-- p.05 -->

```json
{
 "sucesso": true,
 "dados": [
 {
 "nsu": 101,
 "tipoDocumento": "NFSeV",
 "chaveAcesso": "123456789012345678901234567890123456",
 "dataHoraGeracao": "2024-01-15T10:30:00Z",
 "arquivoXml": "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4...",
 "tipoEvento": null
 },
 {
 "nsu": 102,
 "tipoDocumento": "Evento",
 "chaveAcesso": "123456789012345678901234567890123456",
 "dataHoraGeracao": "2024-01-15T11:00:00Z",
 "arquivoXml": "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4...",
 "tipoEvento": 1
 }
 ],
 "notificacoes": []
}
```

#### Sem Dados (200 OK)

Quando não há documentos para os parâmetros informados, retorna null:

```json
null
```

#### Erro no Serviço (500 Internal Server Error)

Em caso de erro interno do serviço, será retornado um status HTTP 500

### Estrutura de dados

| Campo | Tipo | Descrição |
|---|---|---|
| nsu | long | Número Sequencial Único do documento |
| tipoDocumento | string | Tipo do documento (NFSeV, Evento, etc.) |
| chaveAcesso | string | Chave de acesso única do documento |
| dataHoraGeracao | datetime | Data e hora de geração do documento |
| arquivoXml | byte[] | Conteúdo do arquivo XML em Base64 |
| tipoEvento | integer? | Tipo do evento (quando aplicável) |

### Códigos de Erro

#### Tipos de Notificação

| Tipo | Valor | Descrição |
|---|---|---|
| ERRO | 0 | Erro que impede o processamento |
| ALERTA | 1 | Aviso informativo |

#### Códigos Comuns

| Código | Tipo | Descrição |
|---|---|---|
| SEM_ALIQUOTAS | ALERTA | Não existem alíquotas para o município |
| CERTIFICADO_NAO_ENCONTRADO | ERRO | Certificado digital não encontrado |
