<!-- p.11 -->
# 3.2 Quadro Resumo Sobre as Faixas de Série

Atualmente o campo de Série da NF-e é informado como segue:

| Emitente | Processo Emissão | Assinatura | Série | Chave Acesso | Numeração |
|---|---|---|---|---|---|
| CNPJ | Aplicativo da Empresa | e-CNPJ do Emitente (procEmi<>1,2) | 000-889 | CNPJ do Emitente | Sequencial por CNPJ, controlado pelo emitente. |
| CNPJ | Programa Emissor Fisco | Idem | Idem | Idem | Idem |
| CNPJ/CPF | Site SEFAZ | e-CNPJ da SEFAZ (procEmi=1) | 890-899 | CNPJ da SEFAZ | Sequencial pela SEFAZ, independentemente do emitente (CPF ou CNPJ). |

As definições acima são mantidas, incluindo novas alternativas como segue:

| Emitente | Processo Emissão | Assinatura | Série | Chave Acesso | Numeração |
|---|---|---|---|---|---|
| CNPJ | Site SEFAZ | e-CNPJ da SEFAZ (procEmi=1), ou e-CNPJ do Emitente (procEmi=2) | 900-909 | CNPJ do Emitente | Sequencial por CNPJ, controlado pela SEFAZ; |
| CPF | Site SEFAZ | e-CNPJ da SEFAZ (procEmi=1), ou e-CPF do Emitente (procEmi=2) | 910-919 | CPF do Emitente | Sequencial pelo CPF, controlado pela SEFAZ; |
| CPF | Aplicativo da Empresa | e-CPF do Emitente (procEmi<>1,2) | 920-969 | CPF do Emitente | Sequencial por CPF, controlado pelo emitente; |

Importante comentar que normalmente o CNPJ define um único estabelecimento (uma única filial da empresa na UF), com um único endereço e uma única Inscrição Estadual. No caso do Produtor Rural, isso muda e existem casos onde o mesmo CNPJ participa de vários Estabelecimentos Rurais (várias Inscrições Estaduais). Nestes casos, o CNPJ na Chave de Acesso pode não identificar uma única Inscrição Estadual na UF.

O mesmo ocorre para o Produtor Rural identificado pelo seu CPF, sendo mais comum ainda a participação do mesmo CPF em diferentes estabelecimentos rurais (várias Inscrições Estaduais de Produtor Rural) na mesma UF.

**Numeração da NF-e por Estabelecimento Rural (Inscrição Estadual)**

No caso de Produtor Rural, Pessoa Física, na Chave de Acesso consta o CPF do Emitente, mas não consta a Inscrição Estadual.

Esta realidade traz uma dificuldade para poder gerenciar a numeração das NF-e por Inscrição Estadual, caso o CPF possua vários estabelecimentos rurais. Exemplificando, para o mesmo CPF, a NF-e número 1 pode ser para uma determinada Inscrição Estadual e a NF-e número 2 pode ter sido autorizada para outra Inscrição Estadual de Produtor Rural.

<!-- p.12 -->
Nestes casos, o contribuinte deverá utilizar Séries específicas para cada estabelecimento, na faixa 920 a 969.
