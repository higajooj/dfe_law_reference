<!-- p.3 -->
# Histórico de Alterações

## Alterações introduzidas na versão 1.10

- Alterada a denominação do termo descrito na versão anterior de “ICMS de Partilha” para “ICMS em Operações Interestaduais”.
- Incluída exceção na regra N12-70 para tratar o CST nas vendas de veículos novos a grandes consumidores ou para faturamento direto.
- Incluída regra de validação E16a-30 para evitar erro na indicação de contribuinte como Isento de IE para as SEFAZ que não permitem esse tipo de situação (ou seja, para essas SEFAZ, todo contribuinte tem que ter IE).
- Incluída regra de validação N23-10 para exigir o preenchimento do campo CEST se houver destaque do ICMS-ST (campo vICMSST), exceto para o grupo de Partilha do ICMS (campo ICMSPart).
- Incluídas as exceções na regra NA01-20 para não exigir o grupo do ICMS interestadual nos casos de vendas de veículos novos a grandes consumidores ou para faturamento direto quando tiver o preenchimento do Grupo de Partilha do ICMS (campo ICMSPart).
- Retirada das regras de validação NA15-10 (cálculo do valor do ICMS interestadual para a UF de destino) e NA17-10 (cálculo do valor do ICMS interestadual para a UF do remetente), visando o aguardo de publicação legislativa esclarecendo detalhes acerca da metodologia de cálculo. Nova versão desta nota técnica será publicada contendo as respectivas regras de validação.
- Incluídos campos para identificar o valor devido exclusivamente à UF de destino em decorrência do percentual de ICMS relativo ao Fundo de Combate à Pobreza, previsto na Constituição Federal, no Art. 82 do ADCT - Ato das Disposições Constitucionais Transitórias;
- Incluídas novas regras de validação relacionadas com os novos campos.
- Esclarecimentos sobre a validação, no ambiente de homologação, quanto as regras que só terão efeito em produção a partir de 01/01/2016.
- Incluídos códigos de erros não indicados na versão anterior
- Publicado Schema XML através de Pacote de Liberação PL_008h.

## Alterações introduzidas na versão 1.20

- Publicado Schema XML através do Pacote de Liberação PL_008h1, sem alteração de leiaute mas validando os valores possíveis da alíquota interestadual (4%, 7% ou 12%).
- Melhor documentada a exceção da regra de validação E16a-30.
- Alterada a regra de validação N12-70 criando uma exceção para operações de importação. Alterada a data de implantação para 01-jan-2016.
- Alterada a regra de validação N12a-70 criando uma exceção para operações de importação e eliminando o CSOSN=300-Imune. Alterada a data de implantação para 01-jan-2016.
- Alterada a regra de validação N16-20 para não aplicar a validação no caso de devolução de mercadorias
- Alterada a regra de validação N23-10 aperfeiçoando o controle do ICMS ST para o campo CEST. Esta regra não será implementada no dia 01-01-2016 e sim em data futura a ser divulgada.
- Alterada a regra de validação NA01-20 para não exigir a informação do grupo de tributação do destino nos casos de devolução de mercadorias remetidas antes de 2016 ou de nota de entrada. Também foi aperfeiçoada a mensagem de rejeição.
- Alterada a regra de validação NA01-30 criando uma exceção para devolução de não-contribuinte. Também foi aperfeiçoada a mensagem de rejeição.
- Retirada a regra de validação NA07-10.
- Alterada a regra de validação NA09-30 para não aplicar a validação nos casos de devolução ou de nota de entrada.

<!-- p.4 -->
## Alterações introduzidas na versão 1.30

- Alterada a regra de validação E16a-30, incluindo a exceção 2, para tratar a informação do ICMS-ST retido anteriormente, a ser aplicada a partir de 01/01/2016, possibilitando prazo para adequação das empresas emissoras de NF-e destinadas a Contribuintes Isentos de Inscrição Estadual.

## Alterações introduzidas na versão 1.40

- Apresenta a sistemática de cálculo aplicada nas operações e prestações que destinem bens e serviços a consumidor final, conforme definido na 162ª reunião ordinária da Comissão Técnica Permanente do ICMS – COTEPE, com fundamento na cláusula 2ª do Convênio ICMS 93/2015.
- Alterada a regra de validação N23-10 obrigando a informação do CEST na NFC-e nas mesmas condições da NF-e.

## Alterações introduzidas na versão 1.50

Esta versão da NT retira a tabela da sistemática de cálculo de base dupla, anteriormente aprovada na 159ª. Reunião Ordinária do CONFAZ, uma vez que o Convênio ICMS 152, de 11/12/2015, redefiniu o uso de base de cálculo única a partir do valor da operação. Esta alteração não trará nenhum impacto para as aplicações das Sefaz Autorizadoras e Empresas Emissoras de NF-e, uma vez que desde a versão 1.10 todas as regras de validação, envolvendo o cálculo do ICMS Interestadual, já haviam sido retiradas.

Registramos que todos os ambientes de autorização das Sefaz e o Programa Emissor Gratuito já estão preparados para autorizar NF-e em ambiente de homologação, portanto é importante que as empresas emissoras intensifiquem os seus testes, pois todos os processos definidos nesta Nota Técnica serão implementados, em ambiente de produção, na data definida pela EC 87/2015, ou seja, 01/01/2016.

Conforme sintetizado a seguir, algumas regras de validação também foram aperfeiçoadas para evitar rejeições, facilitando o processo de emissão sem a necessidade de alterações nas aplicações das empresas emissoras:

- Publicado Schema XML no Pacote de Liberação PL_008h2, sem alteração de leiaute, eliminando a relação dos códigos da ANP;
- Incluída regra de validação LA02-10, passando a verificar a existência dos códigos de produto da ANP, conforme tabela atualizada e publicada no site da ANP (existem novos códigos que a versão anterior do Schema não contemplava);
- Alteradas as regras de validação N12-70, N12-80 e N12a-70 para não aplicar a validação nas operações de entrada nem nos casos de CFOP de conserto ou reparo de mercadoria;
- Alterada a regra de validação N12a-70 inserindo o CSOSN=300-Imune;
- Melhor documentada a regra de validação N16-04 especificando as operações de devolução e retorno;
- Alterada a regra de validação N16-20 para não aplicar a validação nas operações de venda com entrega em terceiro por conta do adquirente (venda à ordem);
- Alteradas as regras de validação N16-20, NA01-20 e NA09-30 para não aplicar a validação no caso de retorno de mercadorias;
- Alterada a regra de validação N23-10, retirando a Exceção 2, incluído o CSOSN 500 (ICMS cobrado anteriormente por substituição tributária ou por antecipação) e alterada a condição do CSOSN 900 (Outros) para não considerar os casos em que o campo esteja zerado;
- Alterada a regra de validação NA01-20 para não aplicar a validação nas operações com lubrificantes ou combustíveis derivados de petróleo;

<!-- p.5 -->
- Alterada a regra de validação NA01-30 para aplicar a validação nas operações com lubrificantes ou combustíveis derivados de petróleo;
- Estabelece a data da regra de validação do CEST (N23-10) para 01/04/2016 (em ambiente de produção), conforme definido no Convênio ICMS 139/2015.

## Alterações introduzidas na versão 1.60

- Alterada a observação do campo NA15 para que o valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) não seja somado ao valor do ICMS Interestadual para a UF de destino;
- Aperfeiçoada a mensagem de rejeição da RV LA02-10;
- Alteradas as regras de validação N12-70, N12-80 e N12a-70 para não aplicar a validação nos casos de remessa para demonstração dentro do Estado.
- Alterada a regra de validação N16-20 para não aplicar a validação no caso de anulação de valor;
- Alteradas as regras de validação N16-20 e NA01-20 para não aplicar a validação nos casos de entrega da mercadoria dentro do Estado;
- Inseridos CFOP de anulação de valor relativo a aquisição de serviço de transporte no Anexo XIII.05.

Em razão do disposto no inciso II da Cláusula terceira do Convênio ICMS 152/15, que altera o Convênio 93/15, o qual, por sua vez, dispõe sobre os procedimentos a serem observados nas operações e prestações que destinem bens e serviços a consumidor final não contribuinte do ICMS, localizado em outra unidade federada,

> “**Cláusula terceira** Acordam os Estados e o Distrito Federal que até 30 de junho de 2016: [...] II – a fiscalização relativa ao descumprimento das obrigações acessórias previstas neste Convênio será de caráter exclusivamente orientador, desde que ocorra o pagamento do imposto”,

- Foi alterado o prazo limite para implantação em produção das seguintes regras de validação: E16a-30, N12-70, N12a-70, N16-04, N16-20, NA01-20, NA09-10, NA09-20 e NA09-30, e, a critério da UF, a regra N12-80.

A postergação do início de aplicabilidade destas regras de validação não implica, de nenhuma maneira, a desobrigação ou o adiamento da aplicabilidade dos respectivos dispositivos legais.

## Alterações introduzidas na versão 1.70

- Alterada a observação do campo W04e esclarecendo que, em consonância com a forma de preenchimento do campo NA15, o valor do ICMS do Fundo de Combate à Pobreza (FCP) não deve ser somado ao valor do ICMS Interestadual para a UF de destino;
- Incluída regra de validação E16a-40 para rejeitar operação com não contribuinte, que não seja consumidor final;
- Aperfeiçoado do texto da RV N12-70 para vincular a exceção aplicada às operações internas de remessa em demonstração ao CST de suspensão do imposto, a exemplo do que já ocorria na RV N12-80;
- Alteradas as RV N12-80 e N16-20 retirando a aplicação opcional por UF de algumas exceções, por ter sido identificado que elas se aplicam a todas as UF;
- Alteradas as RV N16-04 e N16-20 para identificar se a operação é interestadual pelo identificador de local de destino, tag idDest, ao invés de utilizar o CFOP;
- Alterado para 01/10/16 o prazo para implantação em produção da regra de validação N23-10 e modificada a condição do CST 90 (Outros) para não considerar os casos em que o campo esteja zerado;

<!-- p.6 -->
- Alterada a regra de validação NA01-20 para não aplicar a validação nos casos de remessa de mercadoria, de mercadoria não tributada ou imune, nem no caso de alguns CFOP específicos;
- Alterado para 01/07/16 o prazo para implantação em produção da regra de validação NA01-30 e modificada a RV para não aplicar a validação nos casos de entrega da mercadoria fora do Estado;
- Orientado o preenchimento do campo de Informações Complementares da NF-e, com os valores totais descritos no grupo de tributação do ICMS para a UF de destino. Incluídos exemplos sobre a apresentação desta informação no DANFE (Item 70);
- Apresentados exemplos da sistemática de cálculo aplicada nas operações e prestações que destinem bens e serviços a consumidor final não contribuinte do ICMS, localizado em outra unidade federada, considerando a aplicação da base de cálculo única, conforme estabelecido pelo parágrafo primeiro da cláusula segunda do Convênio ICMS 93/2015 (item 90).

## Alterações introduzidas na versão 1.71

- Alterada a regra de validação E16a-40 para só aplicar a validação em operações que não sejam com exterior;

## Alterações introduzidas na versão 1.80

- Alterada a regra de validação E16a-30 para
  - somente aplicar a validação em operações interestaduais;
  - complementar a mensagem de rejeição para especificar essa alteração;
  - não aplicar a validação nos casos de isenção, imunidade ou não-tributação;
- Alterada a regra N12-70 para
  - possibilitar a discriminação dos acessórios em itens separados na venda de veículos novos;
  - não aplicar a validação em operações interestaduais com lubrificantes derivados de petróleo enquadrados no regime de substituição tributária e antecipação do imposto com o encerramento de tributação;
  - possibilitar devoluções (finNFe=4) em situações de suspensão e diferimento;
- Alterada a regra NA01-20 para não aplicar a validação nos casos de isenção, imunidade ou não tributação, e nem nos casos de NF-e Complementar ou de Ajuste.

## Alterações introduzidas na versão 1.90

- Alteradas as regras de validação E12-30, E12-40, N16-20 e NA09-30, para:
  - considerar, quando existentes, o endereço de entrega na validação da UF do destinatário e o endereço de retirada na validação da UF do emitente,
  - restringir a validação às operações com nota fiscal de saída;
- Incluídas as regras de validação E12-50 e E12-60 para aplicar, nas operações com nota fiscal de entrada, validação similar à das RV E12-30 e E12-40 (na nota fiscal de entrada, o endereço de entrega substitui o do emitente e o endereço de retirada substitui o do destinatário, ao contrário do que ocorre na nota fiscal de saída);
- Alterada a regra de validação E16a-30 para considerar a UF=PA como uma das que não permite a indicação de contribuinte isento de IE nas operações interestaduais;
- Incluída a regra de validação E16a-35 para evitar, nas operações internas, erro na indicação do destinatário como contribuinte isento de IE em UF que não permite esse tipo de situação;

<!-- p.7 -->
- Alterada a regra de validação N12-70 para:
  - ampliar a abrangência da exceção 2 a todas as operações de remessa ou de retorno de mercadorias;
  - ampliar a abrangência da exceção 5 a todos combustíveis derivados de petróleo;
  - permitir que as operações internas de retorno de mercadoria depositada em depósito fechado ou armazém geral e as operações com CFOP 5.123, 5.922, 6.123 e 6.922 possam ser realizadas com diferimento do imposto;
  - a critério da UF, permitir operações internas com cobrança de ST a não-contribuinte;
- Alterada a regra de validação N12-80 para:
  - não aplicar a validação nas operações de entrada com CFOP de conserto ou reparo de mercadoria;
  - a critério da UF, permitir operações com diferimento a contribuinte pessoa jurídica isento de inscrição estadual nas operações internas;
- Alteradas as regras de validação N16-04 e N16-20 para não aplicar a validação:
  - nas operações com veículos novos de venda direta para grandes consumidores ou de faturamento direto para consumidor final, quando existir ao menos um item dessas operações;
  - nas operações de venda a ordem (CFOP 6.118, 6.119, 6.122 e 6.123);
- Alterada a regra de validação N23-10 para, em ambiente de produção, postergar para 01/07/2017 a exigência do CEST (Convênio ICMS nº 90 de 2016);
- Alterada a regra de validação NA01-20 para não aplicar a validação quando o emitente for optante do Simples Nacional (CRT=1);
- Alteradas as regras de validação NA01-20 e NA01-30 para incluir o Xisto (código ANP 560101001) como combustível não derivado de petróleo;
- Incluídas as regras de validação NA15-10 e NA17-10 para validar os valores do ICMS Interestadual para a UF de destino e para a UF do remetente;

## Alterações introduzidas na versão 1.91

- Regras de validação NA15-10 e NA17-10 ficaram para implementação futura.
- Corrigidos os códigos de rejeição das RV E16a-35, NA15-10 e NA17-10, para evitar conflitos com outras RV, e alteradas as mensagens de rejeição das RV E16a-30 e E16a-35, para permitir o reaproveitamento de códigos de rejeição.

## Alterações introduzidas na versão 1.92

- Alterada a regra de validação NA11-10 para considerar o ano da NF referenciada nas operações de devolução ou com CFOP de retorno de mercadorias.

## Alterações introduzidas na versão 1.93

Alterada a regra de validação NA11-10 para também considerar o ano da NF referenciada nas operações com NF complementar ou NF de ajuste.

## Alterações introduzidas na versão 1.94

- Postergada a validação do CEST para 01-abril-2018, em atendimento ao Convênio ICMS 60/2017.
