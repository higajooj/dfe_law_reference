# 2.1.3 Grupo de Informações de Operações de Locação de Bens Móveis

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/** | **gLocBensMoveis** | **G** | **-** | **0-99** | **-** | **Grupo de informações relativas aos bens móveis objetos de locação** |
| <mark>NFSe/infNFSe/DPS/infDPS/IBSCBS/gLocBensMoveis/</mark> | <mark>cNCMBemMovel</mark> | <mark>E</mark> | <mark>N</mark> | <mark>1-1</mark> | <mark>8</mark> | <mark>Código da Nomenclatura Comum do Mercosul (NCM) do bem móvel objeto da locação.</mark> |
| <mark>NFSe/infNFSe/DPS/infDPS/IBSCBS/gLocBensMoveis/</mark> | <mark>xNCMBemMovel</mark> | <mark>E</mark> | <mark>C</mark> | <mark>1-1</mark> | <mark>1-150</mark> | <mark>Descrição do Bem Móvel objeto de locação.</mark> |
| <mark>NFSe/infNFSe/DPS/infDPS/IBSCBS/gLocBensMoveis/</mark> | <mark>qtdNCMBemMovel</mark> | <mark>E</mark> | <mark>N</mark> | <mark>1-1</mark> | <mark>3</mark> | <mark>Quantidade de Bem Móvel objeto de locação.</mark> |

<!-- p.09 -->

Observação importante acerca dos campos acima:

1. O grupo acima só deverá ser informado para os casos de prestação de serviço de locação de bens móveis;
2. A locação de bens móveis, por se tratar de um fato gerador do IBS/CBS, mas não do Imposto Sobre Serviço de Qualquer Natureza – ISSQN, será autorizada em ambiente nacional independente do status da adesão municipal e de sua opção pela utilização dos emissores públicos nacionais;
3. Em razão das regras de negócio presentes no AnexoVI, esse grupo de informações só poderá ser fornecido nos casos em que o código de serviço informado (“cTribNac”) for 99.04.01 “Locação de Bens Móveis”.;

É importante mencionar que o item 99 do código de serviços será desmembrado para comportar as informações dos novos fatos gerados que serão formalizados pela NFS-e:

| Código | Descrição |
|---|---|
| 99.01.01 | Outros serviços sem a incidência de ISSQN e ICMS. |
| 99.02.01 | Operações com Bens Imateriais Não Classificados em Itens Anteriores |
| 99.03.01 | Locação de Bens Imóveis |
| <span style="color:#e00000">99.03.02</span> | <span style="color:#e00000">Cessão Onerosa de Bens Imóveis</span> |
| <span style="color:#e00000">99.03.03</span> | <span style="color:#e00000">Arrendamento de Bens Imóveis</span> |
| <span style="color:#e00000">99.03.04</span> | <span style="color:#e00000">Servidão, Cessão de Uso ou de Espaço de Bens Imóveis (quando não caracterizem operações tributáveis pelo ISSQN)</span> |
| <span style="color:#e00000">99.03.05</span> | <span style="color:#e00000">Permissão de Uso ou Direito de Passagem de Bens Imóveis (quando não caracterizem operações tributáveis pelo ISSQN)</span> |
| 99.04.01 | Locação de Bens Móveis |

OBS:

- Por padrão da plataforma NFS-e, os itens de serviço 99 não destacam ISSQN no documento fiscal;

<!-- p.10 -->

- <span style="color:#e00000">Para os serviços do subitem “99.03”, deve-se utilizar o código NBS (cNBS) **1.1002.10.00** quando o objeto da operação for um imóvel residencial ou **1.1002.20.00** quando for não residencial.</span>

4. Nas próximas semanas, manuais relacionados aos novos fatos geradores serão publicados no portal da NFS-e.
