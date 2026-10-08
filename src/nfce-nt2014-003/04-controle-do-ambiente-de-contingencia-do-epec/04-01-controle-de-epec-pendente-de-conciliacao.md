<!-- p.13 -->
# 4.1 Controle de EPEC Pendente de Conciliação

Para cada EPEC autorizado, a SEFAZ deverá manter uma base de dados contendo, entre outros dados, as informações de:

- Chave de Acesso da NFC-e, com os campos:
  - Modelo do documento fiscal (65=NFC-e);
  - UF e CNPJ do Emitente;
  - Série e Número da NFC-e;
- Valor do EPEC;
- Protocolo e Data-Hora da Autorização do EPEC;
- Indicador de Conciliação: 0=Pendente; 1=EPEC Conciliado;
- Indicador para Liberar a necessidade de Conciliação: 0=Não; 1=Liberada a necessidade de conciliação do EPEC.

Quando o Emitente enviar a NFC-e com a mesma Chave de Acesso de um EPEC pendente, o indicador de conciliação do EPEC deverá ser alterado, eliminando a pendência de conciliação.
