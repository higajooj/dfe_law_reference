<!-- p.6 -->
# 2.4. Validação do Certificado de Transmissão

As validações de A01, A02, A03, A04 e A05 são realizadas pelo protocolo TLS e não precisam ser implementadas. A validação A06 também pode ser realizada pelo protocolo TLS, mas pode falhar se existirem outros certificados digitais de Autoridade Certificador a Raiz que não sejam “ICP-Brasil” no repositório de certificados digitais do servidor de _Web Service_ da SEFAZ.

Regras de validação idênticas aos demais Web Services, podendo gerar os erros:

- 280: “Rejeição: Certificado Transmissor inválido”
- 281: “Rejeição: Certificado Transmissor Data Validade”
- 283: “Rejeição: Certificado Transmissor – erro Cadeia de Certificação”
- 286: “Rejeição: Certificado Transmissor erro no acesso a LCR”
- 284: “Rejeição: Certificado Transmissor revogado”
- 285: “Rejeição: Certificado Transmissor difere ICP-Brasil”
- 282: “Rejeição: Certificado Transmissor sem CNPJ/CPF”
