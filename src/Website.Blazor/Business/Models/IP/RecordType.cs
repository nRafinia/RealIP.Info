namespace Business.Models.IP;

/// <summary>
/// <inheritdoc cref="https://en.wikipedia.org/wiki/List_of_DNS_record_types"/>
/// </summary>
public enum RecordType
{
    /// <summary>
    /// All types
    /// </summary>
    ANY = 0,

    /// <summary>
    /// Address record
    /// </summary>
    A = 1,

    /// <summary>
    /// Name server record
    /// </summary>
    NS = 2,

    /// <summary>
    /// Canonical name record
    /// </summary>
    CNAME = 5,

    /// <summary>
    /// Start of [a zone of] authority record
    /// </summary>
    SOA = 6,

    /// <summary>
    /// PTR Resource Record
    /// </summary>
    PTR = 12,

    /// <summary>
    /// Host Information
    /// </summary>
    HINFO = 13,

    /// <summary>
    /// Mail exchange record
    /// </summary>
    MX = 15,

    /// <summary>
    /// Text record
    /// </summary>
    TXT = 16,

    /// <summary>
    /// Responsible Person
    /// </summary>
    RP = 17,

    /// <summary>
    /// AFS database record
    /// </summary>
    AFSDB = 18,

    /// <summary>
    /// Signature
    /// </summary>
    SIG = 24,

    /// <summary>
    /// Key record
    /// </summary>
    KEY = 25,

    /// <summary>
    /// IPv6 address record
    /// </summary>
    AAAA = 28,

    /// <summary>
    /// Location record
    /// </summary>
    LOC = 29,

    /// <summary>
    /// Service locator
    /// </summary>
    SRV = 33,

    /// <summary>
    /// Naming Authority Pointer
    /// </summary>
    NAPTR = 35,

    /// <summary>
    /// Key Exchanger record
    /// </summary>
    KX = 36,

    /// <summary>
    /// Certificate record
    /// </summary>
    CERT = 37,

    /// <summary>
    /// Delegation name record
    /// </summary>
    DNAME = 39,

    /// <summary>
    /// Address Prefix List
    /// </summary>
    APL = 42,

    /// <summary>
    /// Delegation signer
    /// </summary>
    DS = 43,

    /// <summary>
    /// SSH Public Key Fingerprint
    /// </summary>
    SSHFP = 44,

    /// <summary>
    /// IPsec Key
    /// </summary>
    IPSECKEY = 45,

    /// <summary>
    /// DNSSEC signature
    /// </summary>
    RRSIG = 46,

    /// <summary>
    /// Next Secure record
    /// </summary>
    NSEC = 47,

    /// <summary>
    /// DNS Key record
    /// </summary>
    DNSKEY = 48,

    /// <summary>
    /// DHCP identifier
    /// </summary>
    DHCID = 49,

    /// <summary>
    /// Next Secure record version 3
    /// </summary>
    NSEC3 = 50,

    /// <summary>
    /// NSEC3 parameters
    /// </summary>
    NSEC3PARAM = 51,

    /// <summary>
    /// TLSA certificate association
    /// </summary>
    TLSA = 52,

    /// <summary>
    /// S/MIME cert association
    /// </summary>
    SMIMEA = 53,

    /// <summary>
    /// Host Identity Protocol
    /// </summary>
    HIP = 55,

    /// <summary>
    /// 
    /// </summary>
    CDS = 59,

    /// <summary>
    /// Child DS
    /// </summary>
    CDNSKEY = 60,

    /// <summary>
    /// OpenPGP public key record
    /// </summary>
    OPENPGPKEY = 61,

    /// <summary>
    /// Child-to-Parent Synchronization
    /// </summary>
    CSYNC = 62,

    /// <summary>
    /// Message Digests for DNS Zones
    /// </summary>
    ZONEMD = 63,

    /// <summary>
    /// Service Binding
    /// </summary>
    SVCB = 64,

    /// <summary>
    /// HTTPS Binding
    /// </summary>
    HTTPS = 65,

    /// <summary>
    /// MAC address (EUI-48)
    /// </summary>
    EUI48 = 108,

    /// <summary>
    /// MAC address (EUI-64)
    /// </summary>
    EUI64 = 109,

    /// <summary>
    /// Transaction Key record
    /// </summary>
    TKEY = 249,

    /// <summary>
    /// Transaction Signature
    /// </summary>
    TSIG = 250,

    /// <summary>
    /// Uniform Resource Identifier
    /// </summary>
    URI = 256,

    /// <summary>
    /// Certification Authority Authorization
    /// </summary>
    CAA = 257,

    /// <summary>
    /// DNSSEC Trust Authorities
    /// </summary>
    TA = 32768,

    /// <summary>
    /// DNSSEC Lookaside Validation record
    /// </summary>
    DLV = 32769,
}