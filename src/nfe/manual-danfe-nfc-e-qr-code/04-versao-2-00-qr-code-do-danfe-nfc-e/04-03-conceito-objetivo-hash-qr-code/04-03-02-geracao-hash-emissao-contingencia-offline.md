<!-- p.25 -->
# 4.3.2 Geração do Hash do QR Code na emissão em contingência OFFLINE

Os passos para geração do Hash do QR Code na emissão em contingência offline são:

- **Passo 1:** Converter o valor do DigestValue da NFC-e (digVal) para HEXA;
- **Passo 2:** Concatenar os parâmetros de 1 a 7 constantes da tabela 3 (seção 4.2.2) separados por “|”, na ordem indicada;
- **Passo 3:** Adicionar ao final da string o CSC (disponibilizado pela SEFAZ da UF onde a empresa está localizada);
- **Passo 4:** Aplicar o algoritmo SHA-1 sobre o resultado e converter para hexadecimal, correspondendo a 40 bytes.
