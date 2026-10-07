<!-- p.8 -->
# 2.4 Serviço de Autorização de Uso e Serviços Vinculados

Esta Nota Técnica trata das alterações no Serviço de Autorização de Uso da NF-e utilizado pelas empresas. Existem outros serviços mantidos pela SEFAZ que dão suporte para este serviço de autorização, que serão tratados em outras especificações técnicas.

<!-- p.9 -->
## 2.4.1 Serviço de Autorização de Uso

O Serviço de Autorização de Uso considera os Web Services consumidos pelas empresas no processo de autorização da NF-e, conforme segue:
- Web Service de Envio de Lote com as NF-e a serem autorizadas (item 4.1 do MOC);
- Web Service de Consulta ao Resultado de Lote, se solicitada resposta assíncrona (item 4.2 do MOC);
- Web Service de Evento de Cancelamento (item 4.3 do MOC);
- Web Service de Pedido de Inutilização (item 4.4 do MOC);
- Web Service de Consulta Protocolo de uma Chave de Acesso informada (item 4.5 do MOC);
- Web Service de Consulta Status Serviço (item 4.6 do MOC);
- Web Service de Consulta Cadastro de Contribuintes da UF (item 4.7 do MOC);
- Web Service de Evento de Carta de Correção (item 4.8 do MOC);
- Web Service de Evento de Manifestação do Destinatário (item 4.9 do MOC);
- Web Service de Evento de EPEC (item 4.10 do MOC).

As mudanças nos serviços acima estão detalhadas nesta Nota Técnica.

## ~~2.4.2 Manutenção do Cadastro Nacional de Emissores (CNE)~~ **[Descontinuado]**

Item 2.4.2 removido na versão 1.10 desta NT, pois o CNE não é mais utilizado.

~~As SEFAZ mantêm um cadastrado centralizado com os contribuintes credenciados como emitentes de NF-e na UF. Atualmente no CNE somente é possível cadastrar os contribuintes pessoa jurídica, com o CNPJ e a respectiva Inscrição Estadual na UF.~~

~~O CNE é utilizado para:~~
- ~~Identificação do contribuinte autorizado para a emissão da NF-e pela UF, no ambiente da SEFAZ Virtual;~~
- ~~Identificação do contribuinte autorizado para a emissão da NF-e pela UF, no ambiente da SVC – “SEFAZ Virtual de Contingência”;~~
- ~~Idem para o ambiente de contingência do EPEC - “Evento Prévio de Emissão em Contingência”.~~

~~Está prevista a substituição futura deste cadastro de emitentes, passando a utilizar o Cadastro Centralizado de Contribuintes (CCC) também para a informação de credenciamento.~~

~~O cadastro do CNE não será alterado para manter o registro de credenciamento de pessoa física.~~

> **Revogado/Descontinuado:** seção 2.4.2 riscada na fonte, com todo o seu conteúdo; a própria página declara que o item foi removido na versão 1.10 desta NT, pois o CNE não é mais utilizado.

## 2.4.3 Manutenção do Cadastro Centralizado de Contribuintes (CCC)

As SEFAZ mantêm ~~também~~ um cadastrado centralizado de todos os contribuintes da sua UF, no qual é possível cadastrar não somente contribuintes pessoa jurídica, com seu CNPJ e a respectiva Inscrição Estadual, mas também contribuintes pessoa física, com seu CPF e a respectiva Inscrição Estadual~~. Atualmente no CCC somente é possível cadastrar os contribuintes pessoa jurídica, com o CNPJ e a respectiva Inscrição Estadual.~~

> **Revogado/Descontinuado:** a palavra “também” e a frase final do parágrafo estão riscadas na fonte.

O CCC é utilizado para:

<!-- p.10 -->
- Verificação se a IE do destinatário existe na UF de destino (operação interestadual), se o contribuinte está habilitado e se o CNPJ informado está vinculado com a IE informada, para qualquer um dos ambientes de autorização (SEFAZ Autorizadora ou SEFAZ Virtual);
- Idem para os ambientes de contingência (ambiente SVC e ambiente EPEC).

~~O serviço de manutenção do CCC foi alterado para que as SEFAZ consigam manter também a informação do contribuinte pessoa física (CPF), com a respectiva Inscrição Estadual na UF.~~

> **Revogado/Descontinuado:** parágrafo riscado na fonte.

Este cadastro do CCC é utilizado também como local único de informações sobre o contribuinte, inclusive para as informações de credenciamento para os emitentes Pessoa Física.

## 2.4.4 Ambiente de Contingência: EPEC / SVC

Conforme citado anteriormente, o uso do ambiente de Contingência EPEC e ambiente da SVC para o contribuinte Pessoa Física, depende da operacionalização das mudanças no CCC (Cadastro Centralizado de Contribuintes), para controle do credenciamento do contribuinte pessoa física como emitente de NF-e e para controle do destinatário pessoa física com Inscrição Estadual.
