<!-- p.12 -->

# 3 Serviço de Distribuição MDF-e Atores (MDFeDistribuicaoDFe)

**Função**: Serviço destinado à distribuição de informações de documentos fiscais eletrônicos de interesse de um ator, seja esta pessoa física ou jurídica.

**Processo**: síncrono.

**Método: mdfeDistDFeInteresse**

Este serviço permite que um ator do MDF-e tenha acesso aos documentos fiscais eletrônicos (DF-e) que não tenham sido gerados por ele e que sejam de seu interesse. Pode ser consumido por qualquer ator de MDF-e, Pessoa Jurídica ou Pessoa Física, que possua um certificado digital de PJ ou PF. No caso de Pessoa Jurídica, a empresa será autenticada pelo CNPJ base e poderá realizar a consulta com qualquer CNPJ da empresa desde que o CNPJ base consultado seja o mesmo do certificado digital.

Os documentos fiscais eletrônicos estarão disponíveis para distribuição por até 6 meses após sua recepção pelo Ambiente Nacional do MDF-e. Os documentos que serão disponibilizados para terceiros (informado na tag `autXML`) seguem a tabela abaixo:

| Documento |
|---|
| MDF-e |
| Evento de Cancelamento |
| Evento de Encerramento / Encerramento do Fisco |
| Evento de Inclusão de Condutor |
