<!-- p.10 -->

# 2.6 Reestruturação das Informações de Operações com Bens Imóveis

<!-- p.11 -->

As informações relativas a operações envolvendo bens imóveis — exceto obras —, que serão formalizadas por meio de NFS-e, tanto aquelas situadas no campo de incidência do ISSQN quanto as enquadradas como novos fatos geradores (locação, cessão onerosa ou arrendamento de bens imóveis), passaram por um conjunto de evoluções. As principais alterações são as seguintes:

## Na DPS:

Reestruturação do grupo “imovel”:

- Criação do grupo “gLocacao” referente às informações decorrentes, exclusivamente, de operações de locação, cessão onerosa ou arrendamento de bens imóveis, que servirão de base para a definição dos valores de “vServ”, “vDescIncond” e “vDescCond”, do grupo de valores do serviço prestado na DPS;
- Criação do grupo “gUnidImob” que permitirá a informação das unidades imobiliárias envolvidas nas operações. Neste grupo poderão ser relacionados até 99 (noventa e nove) registros, permitindo a emissão de uma única NFS-e em operações que envolvam 2 (duas) ou mais unidades imobiliárias que estejam num mesmo contexto: mesmos atores (Prestador/Fornecedor e Tomador/Adquirente), mesmo município (cMun) e mesmo percentual de copropriedade (“pCopropriedade”);
- Alteração do nome do grupo “gDedRedIBSCBS” para “gAjusteBCLocImoveis”, assim como dos nomes dos campos relacionados (“tpAjusteBCLocImoveis”, “xTpAjusteBCLocImoveis” e “vAjusteBCLocImoveis”), de forma a melhor identificar os grupos/campos de informações de ajustes (deduções/reduções) relacionados às operações de locação, cessão onerosa ou arrendamento de bens imóveis. As informações constantes no grupo “gAjusteBCLocImoveis” irão compor, na NFS-e, o campo “vCalcAjusteBCLocImoveis” que irá deduzir a base de cálculo do IBS/CBS dessas operações, conforme descrito no tópico 2.3;

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/** | **imovel** | **G** | **-** | **0-1** | **-** | **Grupo de informações de operações relacionadas a bens imóveis, exceto obras.** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/ | cMun | E | N | 1-1 | 7 | Código do município do endereço do imóvel (Tabela do IBGE) |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/** | **gLocacao** | **G** | **-** | **0-1** | **-** | **Grupo de informações relativas às operações de locação, cessão onerosa ou arrendamento de bens imóveis** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/gLocacao/ | pCopropriedade | E | N | 1-1 | 1-3V2 | Percentual de Copropriedade (Caso só haja um locador, cedente ou arrendador, informar o Percentual de Copropriedade de 100%) |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/gLocacao/ | vTotOper | E | N | 1-1 | 1-15V2 | Valor total da operação com bem imóvel (Informar o valor total da operação de locação, cessão onerosa ou arrendamento de bens imóveis, associado ao aluguel, renda ou equivalente, conforme art. 255 da LC 214/2025).<br>Não deverá ser inserido neste campo o valor proporcional do coproprietário. |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/gLocacao/ | vDescIncondTot | E | N | 0-1 | 1-15V2 | Valor total do Desconto Incondicionado (Informar o valor total do desconto incondicionado na operação de locação, cessão onerosa ou arrendamento de bens imóveis) |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/gLocacao/ | vDescCondTot | E | N | 0-1 | 1-15V2 | Valor total do Desconto Condicionado (Informar o valor total do desconto incondicionado na operação de locação, cessão onerosa ou arrendamento de bens imóveis) |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/gLocacao/ | dVencOrig | E | D | 0-1 | - | Data de vencimento original. Ano, Mês e Dia (AAAA-MM-DD) (Informar data de vencimento original do aluguel, renda ou equivalente na operação de locação, cessão onerosa ou arrendamento de bens imóveis) |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/** | **gUnidImob** | **G** | **-** | **0-99** | **-** | **Grupo de informações relativas às unidades imobiliárias objeto da operação** |

<!-- p.12 -->

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/gUnidImob/ | inscImobFisc | E | C | 0-1 | 1-30 | Inscrição imobiliária fiscal (código fornecido pela prefeitura para a identificação da obra ou para fins de recolhimento do IPTU) |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/gUnidImob/ | cCIB | CE | C | 1-1 | 8 | Código do Cadastro Imobiliário Brasileiro - CIB |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/gUnidImob/** | **end** | **CG** | **-** | **1-1** | **-** | **Grupo de informações do endereço do imóvel.** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/gUnidImob/end/ | CEP | E | N | 1-1 | 8 | Código numérico do Endereçamento Postal nacional (CEP) do endereço do imóvel. (Informar os zeros não significativos) |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/gUnidImob/end/ | xLgr | E | C | 1-1 | 1-255 | Tipo e nome do logradouro do endereço do imóvel. |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/gUnidImob/end/ | nro | E | C | 1-1 | 1-60 | Número no logradouro do endereço do imóvel. |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/gUnidImob/end/ | xCpl | E | C | 0-1 | 1-156 | Complemento do endereço do imóvel. |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/gUnidImob/end/ | xBairro | E | C | 0-1 | 1-60 | Bairro do endereço do imóvel. |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/gUnidImob/** | **gAjusteBCLocImoveis** | **G** | **-** | **0-10** | **-** | **Grupo de informações relativas a valores de ajuste (dedução/redução) da Base de Cálculo do IBS e da CBS referentes às operações de locação, cessão onerosa ou arrendamento de bens imóveis** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/gUnidImob/gAjusteBCLocImoveis/ | tpAjusteBCLocImoveis | E | N | 1-1 | 2 | Tipo de parcela não integrante da base de cálculo do IBS e da CBS:<br>01 = Tributos inclusos no aluguel ou equivalente (Ex.: IPTU, Contribuição de melhoria) - apenas para NBS 1.1002.10.00 ou 1.1002.20.00;<br>02 = Emolumento incluso no aluguel ou equivalente - apenas para NBS 1.1002.10.00 ou 1.1002.20.00;<br>03 = Condomínio incluso no aluguel ou equivalente - apenas para NBS 1.1002.10.00 ou 1.1002.20.00;<br>04 = Redutor Social - apenas para a NBS 1.1002.10.00;<br>99 = Outras parcelas inclusas no aluguel ou equivalente |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/gUnidImob/gAjusteBCLocImoveis/ | xTpAjusteBCLocImoveis | E | C | 0-1 | 0-150 | Descrição do tipo de parcela não integrante da base de cálculo do IBS e da CBS quando a opção for "99 = Outras parcelas inclusas no aluguel ou equivalente". |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/gUnidImob/gAjusteBCLocImoveis/ | vAjusteBCLocImoveis | E | N | 1-1 | 1-15V2 | Valor monetário utilizado para não inclusão na base de cálculo do IBS e da CBS da NFS-e que está sendo emitida (R$). (Informar o valor total da parcela não integrante da base de cálculo - IPTU, Condomínio, Redutor social, etc. -, não devendo ser inserido o valor proporcional do coproprietário) |

- Em razão da criação do grupo “gLocacao” em “imovel”, foram promovidas alterações nas regras de validação dos campos “vServ”, “vDescIncond” e “vDescCond”:

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| NFSe/infNFSe/DPS/infDPS/valores/vServPrest/ | vServ | E | N | 1-1 | 1-15V2 | Valor monetário do serviço (R$). (Para os códigos de tributação nacional do subitem 99.03, vServ = pCopropriedade x vTotOper) |
| **NFSe/infNFSe/DPS/infDPS/valores/** | **vDescCondIncond** | **G** | **-** | **0-1** | **-** | **Grupo de informações relativas aos descontos condicionados e incondicionados** |
| NFSe/infNFSe/DPS/infDPS/valores/vDescCondIncond/ | vDescIncond | E | N | 0-1 | 1-15V2 | Valor monetário do desconto incondicionado (R$). (Para os códigos de tributação nacional do subitem 99.03, vDescIncond = pCopropriedade x vDescIncondTot) |
| NFSe/infNFSe/DPS/infDPS/valores/vDescCondIncond/ | vDescCond | E | N | 0-1 | 1-15V2 | Valor monetário do desconto condicionado (R$). (Para os códigos de tributação nacional do subitem 99.03, vDescCond = pCopropriedade x vDescCondTot) |
