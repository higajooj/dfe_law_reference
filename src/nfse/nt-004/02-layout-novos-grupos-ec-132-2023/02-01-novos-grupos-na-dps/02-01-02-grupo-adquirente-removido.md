<!-- p.12 -->

# 2.1.2 (REMOVIDO) ~~Grupo de Informações Relativas ao Adquirente~~

> **Revogado/Descontinuado:** o grupo “adq” foi suprimido do layout nesta Nota Técnica. No original, o título e toda a tabela abaixo estão riscados (inclusive a linha do grupo “adq”); o texto explicativo não está riscado.

Para o padrão da NFS-e nacional, o Tomador de Serviços (conceito da Lei Complementar nº 116, de 31 de julho de 2003) e o Adquirente (conceito da Lei Complementar nº 214, de 16 de janeiro de 2025) são identificados como a mesma pessoa, pois é quem:

a) se obriga ao pagamento ou outra forma de contraprestação pelo fornecimento; ou;

b) nos casos de pagamento ou de qualquer outra forma de contraprestação por conta e ordem ou em nome de terceiros, aquele por conta de quem ou em nome de quem decorre a obrigação de pagamento ou de qualquer outra forma de contraprestação pelo fornecimento do bem ou do serviço.

Dessa forma, o grupo “adq” em “NFSe/infNFSe/DPS/infDPS/IBSCBS/” foi suprimido do *layout* nesta Nota Técnica, uma vez que o Adquirente já está sendo identificado no grupo “toma” em “NFSe/infNFSe/DPS/infDPS/”.

O Tomador/Adquirente pode ser também o próprio destinatário. O Destinatário é a pessoa a quem é fornecido o bem ou o serviço.

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **~~NFSe/infNFSe/DPS/infDPS/IBSCBS/~~** | **~~adq~~** | **~~G~~** | **~~-~~** | **~~0-1~~** | **~~-~~** | **~~Grupo de informações relativas ao Adquirente~~** |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/~~ | ~~CNPJ~~ | ~~CE~~ | ~~N~~ | ~~1-1~~ | ~~14~~ | ~~Número da inscrição no Cadastro Nacional de Pessoa Jurídica (CNPJ) do adquirente de serviço~~ |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/~~ | ~~CPF~~ | ~~CE~~ | ~~N~~ | ~~1-1~~ | ~~11~~ | ~~Número da inscrição no Cadastro de Pessoa Física (CPF) do adquirente do serviço~~ |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/~~ | ~~NIF~~ | ~~CE~~ | ~~C~~ | ~~1-1~~ | ~~40~~ | ~~Número de identificação fiscal fornecido por órgão de administração tributária no exterior~~ |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/~~ | ~~cNaoNIF~~ | ~~CE~~ | ~~N~~ | ~~1-1~~ | ~~1~~ | ~~Motivo para não informação do NIF:<br><br>0 - Não informado na nota de origem;<br>1 - Dispensado do NIF;<br>2 - Não exigência do NIF;~~ |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/~~ | ~~CAEPF~~ | ~~E~~ | ~~N~~ | ~~0-1~~ | ~~14~~ | ~~Número do Cadastro de Atividade Econômica da Pessoa Física (CAEPF) do adquirente do serviço.~~ |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/~~ | ~~xNome~~ | ~~E~~ | ~~C~~ | ~~1-1~~ | ~~150~~ | ~~Nome / Nome Empresarial do adquirente~~ |
| **~~NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/~~** | **~~end~~** | **~~G~~** | **~~-~~** | **~~0-1~~** | **~~-~~** | **~~Grupo de informações do endereço do adquirente do serviço.~~** |
| **~~NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/end/~~** | **~~endNac~~** | **~~CG~~** | **~~-~~** | **~~1-1~~** | **~~-~~** | **~~Grupo de informações do endereço nacional.~~** |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/end/endNac/~~ | ~~cMun~~ | ~~E~~ | ~~N~~ | ~~1-1~~ | ~~7~~ | ~~Código do município do endereço do adquirente do serviço.<br>(Tabela do IBGE)~~ |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/end/endNac/~~ | ~~CEP~~ | ~~E~~ | ~~C~~ | ~~1-1~~ | ~~8~~ | ~~Código numérico do Endereçamento Postal nacional (CEP) do endereço do adquirente do serviço.~~ |
| **~~NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/end/~~** | **~~endExt~~** | **~~CG~~** | **~~-~~** | **~~1-1~~** | **~~-~~** | **~~Grupo de informações do endereço no exterior.~~** |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/end/endExt/~~ | ~~cPais~~ | ~~E~~ | ~~C~~ | ~~1-1~~ | ~~2~~ | ~~Código do país do endereço do adquirente do serviço.<br>(Tabela de Países ISO)~~ |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/end/endExt/~~ | ~~cEndPost~~ | ~~E~~ | ~~C~~ | ~~1-1~~ | ~~1-11~~ | ~~Código alfanumérico do Endereçamento Postal no exterior do adquirente do serviço.~~ |

<!-- p.13 -->

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/end/endExt/~~ | ~~xCidade~~ | ~~E~~ | ~~C~~ | ~~1-1~~ | ~~1-60~~ | ~~Nome da cidade no exterior do adquirente do serviço.~~ |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/end/endExt/~~ | ~~xEstProvReg~~ | ~~E~~ | ~~C~~ | ~~1-1~~ | ~~1-60~~ | ~~Estado, província ou região da cidade no exterior do adquirente do serviço.~~ |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/end/~~ | ~~xLgr~~ | ~~E~~ | ~~C~~ | ~~1-1~~ | ~~1-255~~ | ~~Tipo e nome do logradouro do endereço do adquirente do serviço.~~ |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/end/~~ | ~~nro~~ | ~~E~~ | ~~C~~ | ~~1-1~~ | ~~1-60~~ | ~~Número no logradouro do endereço do adquirente do serviço.~~ |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/end/~~ | ~~xCpl~~ | ~~E~~ | ~~C~~ | ~~0-1~~ | ~~1-156~~ | ~~Complemento do endereço do adquirente do serviço.~~ |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/end/~~ | ~~xBairro~~ | ~~E~~ | ~~C~~ | ~~1-1~~ | ~~1-60~~ | ~~Bairro do endereço do adquirente do serviço.~~ |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/~~ | ~~fone~~ | ~~E~~ | ~~N~~ | ~~0-1~~ | ~~6-20~~ | ~~Número do telefone do adquirente do serviço.<br>(Preencher com o Código DDD + número do telefone. Nas operações com exterior é permitido informar o código do país + código da localidade + número do telefone)~~ |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/~~ | ~~email~~ | ~~E~~ | ~~C~~ | ~~0-1~~ | ~~1-80~~ | ~~E-mail do adquirente.~~ |
