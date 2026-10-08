<!-- p.6 -->
# 2.1 Sobre a Chave de Acesso da NFC-e

Na Chave de Acesso da NFC-e consta o CNPJ da empresa emitente da NFC-e. Esta realidade terá que ser alterada, permitindo a identificação na Chave de Acesso do emitente produtor rural (CPF).

Também terá que ser alterado o processo de assinatura da NFC-e, que neste caso poderá ser utilizado um e-CPF quando utilizar software próprio.

No caso de emissão com software próprio:

- O CPF deverá constar na Chave de Acesso, precedido por zeros, completando 14 posições;
- Deverá utilizar a série reservada [920-969]
- A NFC-e deverá ser assinada com o Certificado Digital do Emitente, do tipo “e-CPF”.

No caso de emissão com aplicativo NFF:

- O CPF deverá constar na Chave de Acesso, precedido por zeros, completando 14 posições;
- Não terá série reservada, mas identifica se o emitente é CPF por outro campo na chave de acesso (NT 2021.002);
- A NFC-e deverá ser assinada com o Certificado Digital do Emitente da Sefaz Virtual do Rio Grande do Sul (SVRS).
