<!-- p.5 -->
# 02.1 NFC-e: Leiaute QR-Code versão 3

Nesta NT está definido o novo leiaute do QR-Code da NFC-e (versão 3). Nesta nova versão, o controle sobre a autenticidade do conteúdo do QR-Code impresso no DANFE NFC-e será feito pela assinatura de campos específicos do QR-Code. Esse controle será feito unicamente para as NFC-e emitidas em Contingência, com a inclusão do resultado da assinatura no próprio QR-Code.

Neste novo modelo, não será mais necessário o controle do CSC-Código de Segurança do Contribuinte pelas empresas.

Futuramente (sem data definida) está prevista a eliminação do CSC (Código de Segurança do Contribuinte), com a adoção unicamente do leiaute do QR-Code versão 3.

As vantagens para as empresas na adoção deste modelo são:

- Elimina a necessidade de manutenção do CSC, considerando que essa manutenção é feita manualmente em página Web do Portal da UF e o CSC fornecido tem que ser carregado manualmente no sistema Emissor da NFC-e. Portanto, a eliminação do CSC reduz a complexidade operacional para a empresa;
- A manutenção do CSC é por UF, ou seja, a empresa que possui filial em várias UF tem que manter CSC diferentes para cada UF/CNPJ-8. Eliminando o CSC, elimina essa complexidade;
- Elimina o controle da empresa em manter somente 2 CSC ativos por UF.

As vantagens para o Fisco são:

- Da mesma forma que as empresas, elimina a complexidade operacional de manutenção de página WEB para controle do CSC para cada CNPJ-8;
- Elimina a necessidade de manter Web Service de Sincronismo com a SEFAZ Virtual, para as UF participantes deste tipo de Ambiente Autorizador de NFC-e;
- Permite a adoção deste controle de segurança sobre a emissão do QR-Code para todas as UF, considerando que atualmente algumas UF não mantém o controle do CSC no seu Portal de atendimento ao Contribuinte.
