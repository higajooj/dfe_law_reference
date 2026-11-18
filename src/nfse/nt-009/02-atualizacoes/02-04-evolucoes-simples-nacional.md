<!-- p.08 -->

# 2.4 Evoluções para o Simples Nacional

Para o correto destaque de alíquotas e valores de IBS/CBS na NFS-e, quando esses tributos são apurados pelo Simples Nacional, o layout do documento fiscal passou por evoluções e pelas adaptações que se seguem:

## Na DPS:

- Atualização do domínio do campo “opSimpNac” para inclusão da opção “4 – Optante Pendente”, buscando atender à situação em que o prestador de serviços tem sua opção pelo regime do Simples Nacional ainda pendente de regularização/julgamento:

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| NFSe/infNFSe/DPS/infDPS/prest/regTrib/ | opSimpNac | E | N | 1-1 | 1 | Situação perante Simples Nacional:<br>1 - Não Optante;<br>2 - Optante - Microempreendedor Individual (MEI);<br>3 - Optante - Microempresa ou Empresa de Pequeno Porte (ME/EPP);<br>4 - Optante Pendente; |

<!-- p.09 -->

- Inserção do campo “regApIBSCBSSN” que permitirá a indicação do regime de apuração tributária do IBS e da CBS para o prestador de serviços optante pelo regime do Simples Nacional ou cuja opção esteja pendente:

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| NFSe/infNFSe/DPS/infDPS/prest/regTrib/ | regApIBSCBSSN | E | N | 0-1 | 1 | Regime de Apuração Tributária pelo Simples Nacional para **IBS e CBS**:<br>1 - IBS e CBS apurados pelo SN;<br>2 - CBS apurada pelo SN e IBS apurado pelo regime regular;<br>3 - IBS e CBS apurados pelo regime regular |

- Inserção do campo “cAtvSN” a fim de que o prestador de serviços optante pelo regime do Simples Nacional ou cuja opção esteja pendente indique o enquadramento de sua atividade no regime do Simples Nacional, conforme a Lei Complementar nº 123/2006:

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| NFSe/infNFSe/DPS/infDPS/serv/cServ/ | cAtvSN | E | N | 0-1 | 2 | Código da atividade do Simples Nacional, conforme a Lei Complementar nº 123/2006:<br>7 - Prestação de serviços, cessão de direitos, de uso ou de espaço com incidência do ISS, tributados exclusivamente pelo Anexo III.<br>8 - Prestação de serviços contábeis autorizados a pagar o ISS em valor fixo em guia do Município - Anexo III.<br>9 - Prestação de serviços - Sujeitos ao Fator “R” – Anexo III ou V.<br>10 - Prestação de serviços de transporte municipal rodoviário, metroviário, ferroviário e aquaviário de passageiros relacionados no subitem 16.01 da lista anexa à LC 116/2003 - Anexo III.<br>11 - Locação de bens móveis e operações com serviços, bens imateriais e direitos, inclusive com bens imóveis, sem incidência de ISS - Anexo III.<br>12 - Prestação de serviços da área da construção civil relacionados nos subitens 7.02 e 7.05 da lista anexa à LC 116/2003 - Anexo III.<br>13 - Prestação de serviços da área da construção civil relacionados nos subitens 7.02 e 7.05 da lista anexa à LC 116/2003 - Anexo IV.<br>14 - Prestação de serviços - Anexo IV.<br>90 - Operações não tributadas. |

> **OBS:** Em observância à padronização das informações constantes nos documentos fiscais de padrão nacional, manteve-se a numeração ordinal da relação de códigos da atividade do Simples Nacional, conforme a Lei Complementar nº 123/2006, adotando-se, no domínio do referido campo, apenas aqueles aplicáveis às operações abrangidas pela NFS-e.
>
> - Foram realizados ajustes nas regras de negócio do campo Código da Atividade do Simples Nacional (“cAtvSN”), com o objetivo de garantir que a obrigatoriedade/validação das informações seja bicondicional, ou seja, a primeira informação só é válida se a segunda informação também for, e vice-versa.

## Na NFS-e:

- Inserção do campo “vReceitaBrutaSN” que representará o valor da receita bruta para os optantes pelo regime do Simples Nacional e servirá de base para a apuração dos tributos abarcados por este regime:

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| NFSe/infNFSe/IBSCBS/valores/ | vReceitaBrutaSN | E | N | 0-1 | 1-15V2 | ~~Valor da Receita Bruta para os Optantes do Simples Nacional.<br><br>vReceitaBrutaSN = vServ - descIncond - vCalcAjusteBCIBSCBS - vCalcAjusteBCISSQN\*<br><br>\*apenas quando o valor calculado se referir à soma a partir de docAjusteBC/tpAjusteBC do tipo = "9 - Profissional parceiro"~~ |

> **Revogado/Descontinuado:** a descrição e a fórmula acima do campo “vReceitaBrutaSN” estão tachadas no original; a versão vigente é a descrita no tópico seguinte.

<!-- p.10 -->

- Alteração da descrição do campo e das notas explicativas, juntamente com ajustes nas regras de negócio, de forma a contemplar, na montagem da referida base de cálculo (“vReceitaBrutaSN”), a segregação entre Receita Interna e Externa, que se dará através do indicador “tpRBSN”, presente junto ao cClassTrib informado (de acordo com os indicadores vinculados ao respectivo código);

  **Valor da Receita Bruta para os Optantes do Simples Nacional.**

  A segregação entre Receita Interna e Externa se dará pelo indicador "tpRBSN" do cClassTrib, descritos abaixo:

  - Se o indicador tpRBSN para o código da classificação tributária (cClassTrib) informado for igual a 0 (Não é receita bruta), então vReceitaBrutaSN = 0.
  - Se o indicador tpRBSN para o código da classificação tributária (cClassTrib) informado for diferente de 0 (Não é receita bruta), então vReceitaBrutaSN = vServ - descIncond - vCalcAjusteBCIBSCBS - vCalcAjusteBCISSQN\*
    - \*apenas quando o valor calculado se referir à soma a partir de docAjusteBC/tpAjusteBC do tipo = "9 - Profissional parceiro"

  Valores de tpRBSN:

  - 1 - Receita bruta - interna
  - 2 - Receita bruta - interna sem cálculo de IBS e CBS
  - 3 - Receita bruta - exportação direta
  - 4 - Receita bruta - exportação indireta
  - 5 - Receita Bruta - mercado interno e exportação (50/50)
  - 0 - Não é receita bruta
  - 9 - Fornecimento incompatível com SN

  Deve-se deduzir da receita bruta os valores informados pelo salão quando tpAjusteBC = 9 ("Profissional parceiro").

- Criação do grupo “gTribSN” que conterá as informações da composição do valor do IBS e da CBS para os optantes pelo regime do Simples Nacional com regime de apuração da CBS e/ou do IBS por esse regime de apuração:

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/IBSCBS/totCIBS/** | **gTribSN** | **G** | **-** | **0-1** | **-** | **Grupo de informações da composição do valor do IBS e da CBS para o Simples Nacional** |
| NFSe/infNFSe/IBSCBS/totCIBS/gTribSN/ | pIBSSN | E | N | 0-1 | 1-2V2 | Alíquota do IBS Total calculada apenas para os Optantes do Simples Nacional. |
| NFSe/infNFSe/IBSCBS/totCIBS/gTribSN/ | vIBSSN | E | N | 0-1 | 1-15V2 | Valor do IBS para os Optantes do Simples Nacional |
| NFSe/infNFSe/IBSCBS/totCIBS/gTribSN/ | pCBSSN | E | N | 1-1 | 1-2V2 | Alíquota da CBS apenas para os Optantes do Simples Nacional. |
| NFSe/infNFSe/IBSCBS/totCIBS/gTribSN/ | vCBSSN | E | N | 1-1 | 1-15V2 | Valor da CBS para os Optantes do Simples Nacional |

> **OBS:** Dadas as alterações promovidas nas regras do campo “vReceitaBrutaSN”, as regras de negócio aplicadas aos campos “vIBSSN” e “vCBSSN” também foram ajustadas, visando, da mesma forma, atender às regras de segregação entre Receita Interna e Externa.
>
> Em razão da necessidade de criação do grupo acima para o correto destaque do IBS e da CBS para os optantes ou pendentes com regime de apuração desses tributos pelo Simples Nacional, foi necessária a mudança da ocorrência (OCOR.) em alguns campos/grupos na NFS-e que antes eram obrigatórios, são eles: “vIBSTot”, “gIBSUFTot”, “gIBSMunTot”, “pCredPresCBS”, “vCredPresCBS” e “vCBS".
