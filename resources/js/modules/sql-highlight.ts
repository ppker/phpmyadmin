import $ from 'jquery';

/**
 * Definition of links to MySQL documentation.
 */
const mysqlDocKeyword = {
    /* Multi word */
    'CHARACTER SET': ['charset'],
    'SHOW AUTHORS': ['show-authors'],
    'SHOW BINARY LOGS': ['show-binary-logs'],
    'SHOW BINLOG EVENTS': ['show-binlog-events'],
    'SHOW CHARACTER SET': ['show-character-set'],
    'SHOW COLLATION': ['show-collation'],
    'SHOW COLUMNS': ['show-columns'],
    'SHOW CONTRIBUTORS': ['show-contributors'],
    'SHOW CREATE DATABASE': ['show-create-database'],
    'SHOW CREATE EVENT': ['show-create-event'],
    'SHOW CREATE FUNCTION': ['show-create-function'],
    'SHOW CREATE PROCEDURE': ['show-create-procedure'],
    'SHOW CREATE TABLE': ['show-create-table'],
    'SHOW CREATE TRIGGER': ['show-create-trigger'],
    'SHOW CREATE VIEW': ['show-create-view'],
    'SHOW DATABASES': ['show-databases'],
    'SHOW ENGINE': ['show-engine'],
    'SHOW ENGINES': ['show-engines'],
    'SHOW ERRORS': ['show-errors'],
    'SHOW EVENTS': ['show-events'],
    'SHOW FUNCTION CODE': ['show-function-code'],
    'SHOW FUNCTION STATUS': ['show-function-status'],
    'SHOW GRANTS': ['show-grants'],
    'SHOW INDEX': ['show-index'],
    'SHOW MASTER STATUS': ['show-master-status'],
    'SHOW OPEN TABLES': ['show-open-tables'],
    'SHOW PLUGINS': ['show-plugins'],
    'SHOW PRIVILEGES': ['show-privileges'],
    'SHOW PROCEDURE CODE': ['show-procedure-code'],
    'SHOW PROCEDURE STATUS': ['show-procedure-status'],
    'SHOW PROCESSLIST': ['show-processlist'],
    'SHOW PROFILE': ['show-profile'],
    'SHOW PROFILES': ['show-profiles'],
    'SHOW RELAYLOG EVENTS': ['show-relaylog-events'],
    'SHOW SLAVE HOSTS': ['show-slave-hosts'],
    'SHOW SLAVE STATUS': ['show-slave-status'],
    'SHOW STATUS': ['show-status'],
    'SHOW TABLE STATUS': ['show-table-status'],
    'SHOW TABLES': ['show-tables'],
    'SHOW TRIGGERS': ['show-triggers'],
    'SHOW VARIABLES': ['show-variables'],
    'SHOW WARNINGS': ['show-warnings'],
    'LOAD DATA INFILE': ['load-data'],
    'LOAD XML': ['load-xml'],
    'LOCK TABLES': ['lock-tables'],
    'UNLOCK TABLES': ['lock-tables'],
    'ALTER DATABASE': ['alter-database'],
    'ALTER EVENT': ['alter-event'],
    'ALTER LOGFILE GROUP': ['alter-logfile-group'],
    'ALTER FUNCTION': ['alter-function'],
    'ALTER PROCEDURE': ['alter-procedure'],
    'ALTER SERVER': ['alter-server'],
    'ALTER TABLE': ['alter-table'],
    'ALTER TABLESPACE': ['alter-tablespace'],
    'ALTER VIEW': ['alter-view'],
    'CREATE DATABASE': ['create-database'],
    'CREATE EVENT': ['create-event'],
    'CREATE FUNCTION': ['create-function'],
    'CREATE INDEX': ['create-index'],
    'CREATE LOGFILE GROUP': ['create-logfile-group'],
    'CREATE PROCEDURE': ['create-procedure'],
    'CREATE SERVER': ['create-server'],
    'CREATE TABLE': ['create-table'],
    'CREATE TABLESPACE': ['create-tablespace'],
    'CREATE TRIGGER': ['create-trigger'],
    'CREATE VIEW': ['create-view'],
    'DROP DATABASE': ['drop-database'],
    'DROP EVENT': ['drop-event'],
    'DROP FUNCTION': ['drop-function'],
    'DROP INDEX': ['drop-index'],
    'DROP LOGFILE GROUP': ['drop-logfile-group'],
    'DROP PROCEDURE': ['drop-procedure'],
    'DROP SERVER': ['drop-server'],
    'DROP TABLE': ['drop-table'],
    'DROP TABLESPACE': ['drop-tablespace'],
    'DROP TRIGGER': ['drop-trigger'],
    'DROP VIEW': ['drop-view'],
    'RENAME TABLE': ['rename-table'],
    'TRUNCATE TABLE': ['truncate-table'],

    /* Statements */
    'SELECT': ['select'],
    'SET': ['set'],
    'EXPLAIN': ['explain'],
    'DESCRIBE': ['describe'],
    'DELETE': ['delete'],
    'SHOW': ['show'],
    'UPDATE': ['update'],
    'INSERT': ['insert'],
    'REPLACE': ['replace'],
    'CALL': ['call'],
    'DO': ['do'],
    'HANDLER': ['handler'],
    'COLLATE': ['charset-collations'],

    /* Functions */
    'ABS': ['mathematical-functions', 'function_abs'],
    'ACOS': ['mathematical-functions', 'function_acos'],
    'ADDDATE': ['date-and-time-functions', 'function_adddate'],
    'ADDTIME': ['date-and-time-functions', 'function_addtime'],
    'AES_DECRYPT': ['encryption-functions', 'function_aes_decrypt'],
    'AES_ENCRYPT': ['encryption-functions', 'function_aes_encrypt'],
    'AND': ['logical-operators', 'operator_and'],
    'ASCII': ['string-functions', 'function_ascii'],
    'ASIN': ['mathematical-functions', 'function_asin'],
    'ATAN2': ['mathematical-functions', 'function_atan2'],
    'ATAN': ['mathematical-functions', 'function_atan'],
    'AVG': ['aggregate-functions', 'function_avg'],
    'BENCHMARK': ['information-functions', 'function_benchmark'],
    'BIN': ['string-functions', 'function_bin'],
    'BINARY': ['cast-functions', 'operator_binary'],
    'BIT_AND': ['aggregate-functions', 'function_bit_and'],
    'BIT_COUNT': ['bit-functions', 'function_bit_count'],
    'BIT_LENGTH': ['string-functions', 'function_bit_length'],
    'BIT_OR': ['aggregate-functions', 'function_bit_or'],
    'BIT_XOR': ['aggregate-functions', 'function_bit_xor'],
    'CASE': ['control-flow-functions', 'operator_case'],
    'CAST': ['cast-functions', 'function_cast'],
    'CEIL': ['mathematical-functions', 'function_ceil'],
    'CEILING': ['mathematical-functions', 'function_ceiling'],
    'CHAR_LENGTH': ['string-functions', 'function_char_length'],
    'CHAR': ['string-functions', 'function_char'],
    'CHARACTER_LENGTH': ['string-functions', 'function_character_length'],
    'CHARSET': ['information-functions', 'function_charset'],
    'COALESCE': ['comparison-operators', 'function_coalesce'],
    'COERCIBILITY': ['information-functions', 'function_coercibility'],
    'COLLATION': ['information-functions', 'function_collation'],
    'COMPRESS': ['encryption-functions', 'function_compress'],
    'CONCAT_WS': ['string-functions', 'function_concat_ws'],
    'CONCAT': ['string-functions', 'function_concat'],
    'CONNECTION_ID': ['information-functions', 'function_connection_id'],
    'CONV': ['mathematical-functions', 'function_conv'],
    'CONVERT_TZ': ['date-and-time-functions', 'function_convert_tz'],
    'Convert': ['cast-functions', 'function_convert'],
    'COS': ['mathematical-functions', 'function_cos'],
    'COT': ['mathematical-functions', 'function_cot'],
    'COUNT': ['aggregate-functions', 'function_count'],
    'CRC32': ['mathematical-functions', 'function_crc32'],
    'CURDATE': ['date-and-time-functions', 'function_curdate'],
    'CURRENT_DATE': ['date-and-time-functions', 'function_current_date'],
    'CURRENT_TIME': ['date-and-time-functions', 'function_current_time'],
    'CURRENT_TIMESTAMP': ['date-and-time-functions', 'function_current_timestamp'],
    'CURRENT_USER': ['information-functions', 'function_current_user'],
    'CURTIME': ['date-and-time-functions', 'function_curtime'],
    'DATABASE': ['information-functions', 'function_database'],
    'DATE_ADD': ['date-and-time-functions', 'function_date_add'],
    'DATE_FORMAT': ['date-and-time-functions', 'function_date_format'],
    'DATE_SUB': ['date-and-time-functions', 'function_date_sub'],
    'DATE': ['date-and-time-functions', 'function_date'],
    'DATEDIFF': ['date-and-time-functions', 'function_datediff'],
    'DAY': ['date-and-time-functions', 'function_day'],
    'DAYNAME': ['date-and-time-functions', 'function_dayname'],
    'DAYOFMONTH': ['date-and-time-functions', 'function_dayofmonth'],
    'DAYOFWEEK': ['date-and-time-functions', 'function_dayofweek'],
    'DAYOFYEAR': ['date-and-time-functions', 'function_dayofyear'],
    'DECLARE': ['declare', 'declare'],
    'DECODE': ['encryption-functions', 'function_decode'],
    'DEFAULT': ['miscellaneous-functions', 'function_default'],
    'DEGREES': ['mathematical-functions', 'function_degrees'],
    'DES_DECRYPT': ['encryption-functions', 'function_des_decrypt'],
    'DES_ENCRYPT': ['encryption-functions', 'function_des_encrypt'],
    'DIV': ['arithmetic-functions', 'operator_div'],
    'ELT': ['string-functions', 'function_elt'],
    'ENCODE': ['encryption-functions', 'function_encode'],
    'ENCRYPT': ['encryption-functions', 'function_encrypt'],
    'EXP': ['mathematical-functions', 'function_exp'],
    'EXPORT_SET': ['string-functions', 'function_export_set'],
    'EXTRACT': ['date-and-time-functions', 'function_extract'],
    'ExtractValue': ['xml-functions', 'function_extractvalue'],
    'FIELD': ['string-functions', 'function_field'],
    'FIND_IN_SET': ['string-functions', 'function_find_in_set'],
    'FLOOR': ['mathematical-functions', 'function_floor'],
    'FORMAT': ['string-functions', 'function_format'],
    'FOUND_ROWS': ['information-functions', 'function_found_rows'],
    'FROM_DAYS': ['date-and-time-functions', 'function_from_days'],
    'FROM_UNIXTIME': ['date-and-time-functions', 'function_from_unixtime'],
    'GET_FORMAT': ['date-and-time-functions', 'function_get_format'],
    'GET_LOCK': ['miscellaneous-functions', 'function_get_lock'],
    'GREATEST': ['comparison-operators', 'function_greatest'],
    'GROUP_CONCAT': ['aggregate-functions', 'function_group_concat'],
    'HEX': ['string-functions', 'function_hex'],
    'HOUR': ['date-and-time-functions', 'function_hour'],
    'IF': ['control-flow-functions', 'function_if'],
    'IFNULL': ['control-flow-functions', 'function_ifnull'],
    'IN': ['comparison-operators', 'function_in'],
    'INET_ATON': ['miscellaneous-functions', 'function_inet_aton'],
    'INET_NTOA': ['miscellaneous-functions', 'function_inet_ntoa'],
    'INSTR': ['string-functions', 'function_instr'],
    'INTERVAL': ['comparison-operators', 'function_interval'],
    'IS_FREE_LOCK': ['miscellaneous-functions', 'function_is_free_lock'],
    'IS_USED_LOCK': ['miscellaneous-functions', 'function_is_used_lock'],
    'IS': ['comparison-operators', 'operator_is'],
    'ISNULL': ['comparison-operators', 'function_isnull'],
    'LAST_DAY': ['date-and-time-functions', 'function_last_day'],
    'LAST_INSERT_ID': ['information-functions', 'function_last_insert_id'],
    'LCASE': ['string-functions', 'function_lcase'],
    'LEAST': ['comparison-operators', 'function_least'],
    'LEFT': ['string-functions', 'function_left'],
    'LENGTH': ['string-functions', 'function_length'],
    'LIKE': ['string-comparison-functions', 'operator_like'],
    'LN': ['mathematical-functions', 'function_ln'],
    'LOAD_FILE': ['string-functions', 'function_load_file'],
    'LOCALTIME': ['date-and-time-functions', 'function_localtime'],
    'LOCALTIMESTAMP': ['date-and-time-functions', 'function_localtimestamp'],
    'LOCATE': ['string-functions', 'function_locate'],
    'LOG10': ['mathematical-functions', 'function_log10'],
    'LOG2': ['mathematical-functions', 'function_log2'],
    'LOG': ['mathematical-functions', 'function_log'],
    'LOWER': ['string-functions', 'function_lower'],
    'LPAD': ['string-functions', 'function_lpad'],
    'LTRIM': ['string-functions', 'function_ltrim'],
    'MAKE_SET': ['string-functions', 'function_make_set'],
    'MAKEDATE': ['date-and-time-functions', 'function_makedate'],
    'MAKETIME': ['date-and-time-functions', 'function_maketime'],
    'MASTER_POS_WAIT': ['miscellaneous-functions', 'function_master_pos_wait'],
    'MATCH': ['fulltext-search', 'function_match'],
    'MAX': ['aggregate-functions', 'function_max'],
    'MD5': ['encryption-functions', 'function_md5'],
    'MICROSECOND': ['date-and-time-functions', 'function_microsecond'],
    'MID': ['string-functions', 'function_mid'],
    'MIN': ['aggregate-functions', 'function_min'],
    'MINUTE': ['date-and-time-functions', 'function_minute'],
    'MOD': ['mathematical-functions', 'function_mod'],
    'MONTH': ['date-and-time-functions', 'function_month'],
    'MONTHNAME': ['date-and-time-functions', 'function_monthname'],
    'NAME_CONST': ['miscellaneous-functions', 'function_name_const'],
    'NOT': ['logical-operators', 'operator_not'],
    'NOW': ['date-and-time-functions', 'function_now'],
    'NULLIF': ['control-flow-functions', 'function_nullif'],
    'OCT': ['mathematical-functions', 'function_oct'],
    'OCTET_LENGTH': ['string-functions', 'function_octet_length'],
    'OLD_PASSWORD': ['encryption-functions', 'function_old_password'],
    'OR': ['logical-operators', 'operator_or'],
    'ORD': ['string-functions', 'function_ord'],
    'PASSWORD': ['encryption-functions', 'function_password'],
    'PERIOD_ADD': ['date-and-time-functions', 'function_period_add'],
    'PERIOD_DIFF': ['date-and-time-functions', 'function_period_diff'],
    'PI': ['mathematical-functions', 'function_pi'],
    'POSITION': ['string-functions', 'function_position'],
    'POW': ['mathematical-functions', 'function_pow'],
    'POWER': ['mathematical-functions', 'function_power'],
    'QUARTER': ['date-and-time-functions', 'function_quarter'],
    'QUOTE': ['string-functions', 'function_quote'],
    'RADIANS': ['mathematical-functions', 'function_radians'],
    'RAND': ['mathematical-functions', 'function_rand'],
    'REGEXP': ['regexp', 'operator_regexp'],
    'RELEASE_LOCK': ['miscellaneous-functions', 'function_release_lock'],
    'REPEAT': ['string-functions', 'function_repeat'],
    'REVERSE': ['string-functions', 'function_reverse'],
    'RIGHT': ['string-functions', 'function_right'],
    'RLIKE': ['regexp', 'operator_rlike'],
    'ROUND': ['mathematical-functions', 'function_round'],
    'ROW_COUNT': ['information-functions', 'function_row_count'],
    'RPAD': ['string-functions', 'function_rpad'],
    'RTRIM': ['string-functions', 'function_rtrim'],
    'SCHEMA': ['information-functions', 'function_schema'],
    'SEC_TO_TIME': ['date-and-time-functions', 'function_sec_to_time'],
    'SECOND': ['date-and-time-functions', 'function_second'],
    'SESSION_USER': ['information-functions', 'function_session_user'],
    'SHA': ['encryption-functions', 'function_sha1'],
    'SHA1': ['encryption-functions', 'function_sha1'],
    'SHA2': ['encryption-functions', 'function_sha2'],
    'SIGN': ['mathematical-functions', 'function_sign'],
    'SIN': ['mathematical-functions', 'function_sin'],
    'SLEEP': ['miscellaneous-functions', 'function_sleep'],
    'SOUNDEX': ['string-functions', 'function_soundex'],
    'SPACE': ['string-functions', 'function_space'],
    'SQRT': ['mathematical-functions', 'function_sqrt'],
    'STD': ['aggregate-functions', 'function_std'],
    'STDDEV_POP': ['aggregate-functions', 'function_stddev_pop'],
    'STDDEV_SAMP': ['aggregate-functions', 'function_stddev_samp'],
    'STDDEV': ['aggregate-functions', 'function_stddev'],
    'STR_TO_DATE': ['date-and-time-functions', 'function_str_to_date'],
    'STRCMP': ['string-comparison-functions', 'function_strcmp'],
    'SUBDATE': ['date-and-time-functions', 'function_subdate'],
    'SUBSTR': ['string-functions', 'function_substr'],
    'SUBSTRING_INDEX': ['string-functions', 'function_substring_index'],
    'SUBSTRING': ['string-functions', 'function_substring'],
    'SUBTIME': ['date-and-time-functions', 'function_subtime'],
    'SUM': ['aggregate-functions', 'function_sum'],
    'SYSDATE': ['date-and-time-functions', 'function_sysdate'],
    'SYSTEM_USER': ['information-functions', 'function_system_user'],
    'TAN': ['mathematical-functions', 'function_tan'],
    'TIME_FORMAT': ['date-and-time-functions', 'function_time_format'],
    'TIME_TO_SEC': ['date-and-time-functions', 'function_time_to_sec'],
    'TIME': ['date-and-time-functions', 'function_time'],
    'TIMEDIFF': ['date-and-time-functions', 'function_timediff'],
    'TIMESTAMP': ['date-and-time-functions', 'function_timestamp'],
    'TIMESTAMPADD': ['date-and-time-functions', 'function_timestampadd'],
    'TIMESTAMPDIFF': ['date-and-time-functions', 'function_timestampdiff'],
    'TO_DAYS': ['date-and-time-functions', 'function_to_days'],
    'TRIM': ['string-functions', 'function_trim'],
    'TRUNCATE': ['mathematical-functions', 'function_truncate'],
    'UCASE': ['string-functions', 'function_ucase'],
    'UNCOMPRESS': ['encryption-functions', 'function_uncompress'],
    'UNCOMPRESSED_LENGTH': ['encryption-functions', 'function_uncompressed_length'],
    'UNHEX': ['string-functions', 'function_unhex'],
    'UNIX_TIMESTAMP': ['date-and-time-functions', 'function_unix_timestamp'],
    'UpdateXML': ['xml-functions', 'function_updatexml'],
    'UPPER': ['string-functions', 'function_upper'],
    'USER': ['information-functions', 'function_user'],
    'UTC_DATE': ['date-and-time-functions', 'function_utc_date'],
    'UTC_TIME': ['date-and-time-functions', 'function_utc_time'],
    'UTC_TIMESTAMP': ['date-and-time-functions', 'function_utc_timestamp'],
    'UUID_SHORT': ['miscellaneous-functions', 'function_uuid_short'],
    'UUID': ['miscellaneous-functions', 'function_uuid'],
    'VALUES': ['miscellaneous-functions', 'function_values'],
    'VAR_POP': ['aggregate-functions', 'function_var_pop'],
    'VAR_SAMP': ['aggregate-functions', 'function_var_samp'],
    'VARIANCE': ['aggregate-functions', 'function_variance'],
    'VERSION': ['information-functions', 'function_version'],
    'WEEK': ['date-and-time-functions', 'function_week'],
    'WEEKDAY': ['date-and-time-functions', 'function_weekday'],
    'WEEKOFYEAR': ['date-and-time-functions', 'function_weekofyear'],
    'XOR': ['logical-operators', 'operator_xor'],
    'YEAR': ['date-and-time-functions', 'function_year'],
    'YEARWEEK': ['date-and-time-functions', 'function_yearweek'],
    'SOUNDS_LIKE': ['string-functions', 'operator_sounds-like'],
    'IS_NOT_NULL': ['comparison-operators', 'operator_is-not-null'],
    'IS_NOT': ['comparison-operators', 'operator_is-not'],
    'IS_NULL': ['comparison-operators', 'operator_is-null'],
    'NOT_LIKE': ['string-comparison-functions', 'operator_not-like'],
    'NOT_REGEXP': ['regexp', 'operator_not-regexp'],
    'COUNT_DISTINCT': ['aggregate-functions', 'function_count-distinct'],
    'NOT_IN': ['comparison-operators', 'function_not-in']
};

const mysqlDocBuiltin = {
    'TINYINT': ['numeric-types'],
    'SMALLINT': ['numeric-types'],
    'MEDIUMINT': ['numeric-types'],
    'INT': ['numeric-types'],
    'BIGINT': ['numeric-types'],
    'DECIMAL': ['numeric-types'],
    'FLOAT': ['numeric-types'],
    'DOUBLE': ['numeric-types'],
    'REAL': ['numeric-types'],
    'BIT': ['numeric-types'],
    'BOOLEAN': ['numeric-types'],
    'SERIAL': ['numeric-types'],
    'DATE': ['date-and-time-types'],
    'DATETIME': ['date-and-time-types'],
    'TIMESTAMP': ['date-and-time-types'],
    'TIME': ['date-and-time-types'],
    'YEAR': ['date-and-time-types'],
    'CHAR': ['string-types'],
    'VARCHAR': ['string-types'],
    'TINYTEXT': ['string-types'],
    'TEXT': ['string-types'],
    'MEDIUMTEXT': ['string-types'],
    'LONGTEXT': ['string-types'],
    'BINARY': ['string-types'],
    'VARBINARY': ['string-types'],
    'TINYBLOB': ['string-types'],
    'MEDIUMBLOB': ['string-types'],
    'BLOB': ['string-types'],
    'LONGBLOB': ['string-types'],
    'ENUM': ['string-types'],
    'SET': ['string-types']
};

/**
 * Adds doc link to single highlighted SQL element
 *
 * @param $elm
 * @param params
 */
function documentationAdd ($elm, params) {
    if (typeof window.mysqlDocTemplate === 'undefined') {
        return;
    }

    var url = window.sprintf(
        decodeURIComponent(window.mysqlDocTemplate),
        params[0]
    );
    if (params.length > 1) {
        // The # needs to be escaped to be part of the destination URL
        url += encodeURIComponent('#') + params[1];
    }

    var content = $elm.text();
    $elm.text('');
    $elm.append('<a target="mysql_doc" class="cm-sql-doc" href="' + url + '">' + content + '</a>');
}

/**
 * Generates doc links for keywords inside highlighted SQL
 *
 * @param idx
 * @param elm
 */
function documentationKeyword (idx, elm) {
    var $elm = $(elm);
    /* Skip already processed ones */
    if ($elm.find('a').length > 0) {
        return;
    }

    var keyword = $elm.text().toUpperCase();
    var $next = $elm.next('.cm-keyword');
    if ($next) {
        var nextKeyword = $next.text().toUpperCase();
        var full = keyword + ' ' + nextKeyword;

        var $next2 = $next.next('.cm-keyword');
        if ($next2) {
            var next2Keyword = $next2.text().toUpperCase();
            var full2 = full + ' ' + next2Keyword;
            if (full2 in mysqlDocKeyword) {
                documentationAdd($elm, mysqlDocKeyword[full2]);
                documentationAdd($next, mysqlDocKeyword[full2]);
                documentationAdd($next2, mysqlDocKeyword[full2]);

                return;
            }
        }

        if (full in mysqlDocKeyword) {
            documentationAdd($elm, mysqlDocKeyword[full]);
            documentationAdd($next, mysqlDocKeyword[full]);

            return;
        }
    }

    if (keyword in mysqlDocKeyword) {
        documentationAdd($elm, mysqlDocKeyword[keyword]);
    }
}

/**
 * Generates doc links for builtins inside highlighted SQL
 *
 * @param idx
 * @param elm
 */
function documentationBuiltin (idx, elm) {
    var $elm = $(elm);
    var builtin = $elm.text().toUpperCase();
    if (builtin in mysqlDocBuiltin) {
        documentationAdd($elm, mysqlDocBuiltin[builtin]);
    }
}

/**
 * Higlights SQL using CodeMirror.
 *
 * @param $base
 */
export default function highlightSql ($base) {
    var $elm = $base.find('code.sql');
    $elm.each(function () {
        var $sql = $(this);
        var $pre = $sql.closest('pre');
        /* We only care about visible elements to avoid double processing */
        if ($sql.is(':visible')) {
            var $highlight = $('<div class="sql-highlight cm-s-default"></div>');
            $pre.append($highlight);
            if (typeof window.CodeMirror !== 'undefined') {
                // @ts-ignore
                window.CodeMirror.runMode($sql.text(), 'text/x-mysql', $highlight[0]);
                $sql.hide();
                $highlight.find('.cm-keyword').each(documentationKeyword);
                $highlight.find('.cm-builtin').each(documentationBuiltin);
            }
        }
    });
}
