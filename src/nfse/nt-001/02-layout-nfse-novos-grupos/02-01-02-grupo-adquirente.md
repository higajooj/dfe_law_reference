<!-- p.07 -->

# 2.1.2 Grupo de Informações Relativas ao Adquirente

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/** | **adq** | **G** | **-** | **0-1** | **-** | **Grupo de informações relativas ao Adquirente** |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/adq/ | CNPJ | CE | N | 1-1 | 14 | Número da inscrição no Cadastro Nacional de Pessoa Jurídica (CNPJ) do adquirente de serviço |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/adq/ | CPF | CE | N | 1-1 | 11 | Número da inscrição no Cadastro Pessoa Física (CPF) do adquirente do serviço |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/adq/ | NIF | CE | C | 1-1 | 40 | Número de identificação fiscal fornecido por órgão de administração tributária no exterior |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/adq/ | cNaoNIF | CE | N | 1-1 | 1 | Motivo para não informação do NIF:<br>0 - Não informado na nota de origem;<br>1 - Dispensado do NIF;<br>2 - Não exigência do NIF; |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/adq/ | CAEPF | E | N | 0-1 | 14 | Número do Cadastro de Atividade Econômica da Pessoa Física (CAEPF) do adquirente do serviço. |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/adq/ | xNome | E | C | 1-1 | 150 | Nome / Nome Empresarial do adquirente |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/adq/ | **end** | **G** | **-** | **0-1** | **-** | **Grupo de informações do endereço do adquirente do serviço.** |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/adq/end/ | **endNac** | **CG** | **-** | **1-1** | **-** | **Grupo de informações do endereço nacional.** |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/adq/end/endNac/ | cMun | E | N | 1-1 | 7 | Código do município do endereço do adquirente do serviço.<br>(Tabela do IBGE) |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/adq/end/endNac/ | CEP | E | C | 1-1 | 8 | Código numérico do Endereçamento Postal nacional (CEP) do adquirente do serviço. |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/adq/end/ | **endExt** | **CG** | **-** | **1-1** | **-** | **Grupo de informações do endereço no exterior.** |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/adq/end/endExt/ | cPais | E | C | 1-1 | 2 | Código do país do endereço do prestador do adquirente do serviço.<br>(Tabela de Países ISO) |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/adq/end/endExt/ | cEndPost | E | C | 1-1 | 1-11 | Código alfanumérico do Endereçamento Postal no exterior do adquirente do serviço. |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/adq/end/endExt/ | xCidade | E | C | 1-1 | 1-60 | Nome da cidade no exterior do adquirente do serviço. |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/adq/end/endExt/ | xEstProvReg | E | C | 1-1 | 1-60 | Estado, província ou região da cidade no exterior do adquirente do serviço. |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/adq/end/ | xLgr | E | C | 1-1 | 1-255 | Tipo e nome do logradouro do endereço do adquirente do serviço. |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/adq/end/ | nro | E | C | 1-1 | 1-60 | Número no logradouro do endereço do adquirente do serviço. |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/adq/end/ | xCpl | E | C | 0-1 | 1-156 | Complemento do endereço do adquirente do serviço. |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/adq/end/ | xBairro | E | C | 1-1 | 1-60 | Bairro do endereço do adquirente do serviço. |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/adq/ | fone | E | N | 0-1 | 6-20 | Número do telefone do adquirente.<br>(Preencher com o Código DDD + número do telefone.<br>Nas operações com exterior é permitido informar o código do país + código da localidade + número do telefone) |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/adq/ | email | E | C | 0-1 | 1-80 | E-mail do adquirente. |
