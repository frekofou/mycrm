import { computed, watch, ref } from 'vue';


import dayjs from 'dayjs';
import * as localesList from 'dayjs/locale';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(relativeTime);
dayjs.extend(dayOfYear);
dayjs.extend(weekOfYear);
dayjs.extend(customParseFormat);
dayjs.extend(utc);
dayjs.extend(timezone);

const oldGetDateIso = () => {
    const tzoffset = new Date().getTimezoneOffset() * 60000;
    const localISOTime = new Date(Date.now() - tzoffset).toISOString();
    return localISOTime;
};

const getDateIso = () => {
    return new Date().toISOString();
};

const _oldDateISO = ref(oldGetDateIso());
const _dateISO = ref(getDateIso());

setInterval(() => {
    _oldDateISO.value = oldGetDateIso();
    _dateISO.value = getDateIso();
}, 1000);

export default {
    /*=============================================m_ÔÔ_m=============================================\
        Plugin API
    \================================================================================================*/
    locales: {},
    lang: 'en',
    backupLang: 'en',

    async onLoad() {
        const lang = computed(() => wwLib.$store.getters['front/getLang']);

        for (let locale of localesList.default) {
            this.locales[locale.key] = require(`dayjs/locale/${locale.key}.js`);
        }

        watch(
            lang,
            lang => {
                this.lang = lang;
            },
            { immediate: true }
        );
    },
    /*=============================================m_ÔÔ_m=============================================\
        Dayjs
    \================================================================================================*/
    // deprecated
    dateISO() {
        return _oldDateISO.value;
    },
    date(...args) {
        return new Date(...args).toISOString();
    },
    dateRealtime() {
        return _dateISO.value;
    },
    toDateISO(date, inputFormat = this.settings.publicData.favoriteFormat) {
        if (!date) throw 'First parameter must be a string date';
        inputFormat = inputFormat && inputFormat.length ? inputFormat : 'YYYY-MM-DDTHH:mm:ss.sssZ';
        return dayjs(date, inputFormat, false).toISOString();
    },
    formatDate(date, format = this.settings.publicData.favoriteFormat, locale = this.lang) {
        if (!date) throw 'First parameter must be a string date';

        return dayjs(date)
            .locale(this.locales[locale] || this.backupLang)
            .format(format);
    },
    fromTime(date, withoutSuffix = false, locale = this.lang) {
        if (!date) throw 'First parameter must be a date as string';

        return dayjs()
            .locale(this.locales[locale] || this.backupLang)
            .from(dayjs(date), withoutSuffix);
    },
    toTime(date, withoutSuffix = false, locale = this.lang) {
        if (!date) throw 'First parameter must be a date as string';

        return dayjs()
            .locale(this.locales[locale] || this.backupLang)
            .to(dayjs(date), withoutSuffix);
    },
    compareDate(date1, date2, precision, float = false) {
        if (!date1) throw 'First parameter must be a date';
        if (!date2) throw 'Second parameter must be a date';
        if (!precision) throw 'Third parameter must be a string';

        return dayjs(date2).diff(dayjs(date1), precision, float);
    },
    getSecond(date = new Date().toISOString()) {
        return dayjs(date).get('second');
    },
    getMinute(date = new Date().toISOString()) {
        return dayjs(date).get('minute');
    },
    getHour(date = new Date().toISOString()) {
        return dayjs(date).get('hour');
    },
    getDay(date = new Date().toISOString()) {
        return dayjs(date).date();
    },
    getDayOfWeek(date = new Date().toISOString()) {
        return dayjs(date).get('day');
    },
    getMonth(date = new Date().toISOString()) {
        // Month (January as 0, December as 11) - https://day.js.org/docs/en/get-set/get
        return dayjs(date).get('month') + 1;
    },
    getYear(date = new Date().toISOString()) {
        return dayjs(date).get('year');
    },
    getDayOfYear(date = new Date().toISOString()) {
        return dayjs(date).dayOfYear();
    },
    getWeekOfYear(date = new Date().toISOString()) {
        return dayjs(date).week();
    },
    addSeconds(date, amount) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';

        return dayjs(date).add(amount, 'second').toISOString();
    },
    addMinutes(date, amount) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';

        return dayjs(date).add(amount, 'minute').toISOString();
    },
    addHours(date, amount) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';

        return dayjs(date).add(amount, 'hour').toISOString();
    },
    addDays(date, amount) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';

        return dayjs(date).add(amount, 'day').toISOString();
    },
    addMonths(date, amount) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';

        return dayjs(date).add(amount, 'month').toISOString();
    },
    addYears(date, amount) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';

        return dayjs(date).add(amount, 'year').toISOString();
    },
    setSecond(date, amount) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';

        return dayjs(date).set('second', amount).toISOString();
    },
    setMinute(date, amount) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';

        return dayjs(date).set('minute', amount).toISOString();
    },
    setHour(date, amount) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';

        return dayjs(date).set('hour', amount).toISOString();
    },
    setDay(date, amount) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';
        else if (amount === 0) return dayjs(date).toISOString();

        return dayjs(date).date(amount).toISOString();
    },
    setDayOfWeek(date, amount) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';
        else if (amount === 0) return dayjs(date).toISOString();

        return dayjs(date).set('day', amount).toISOString();
    },
    setMonth(date, amount) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';
        if (amount === 0) return dayjs(date).toISOString();

        // Month (January as 0, December as 11) - https://day.js.org/docs/en/get-set/set
        amount -= 1;
        return dayjs(date).set('month', amount).toISOString();
    },
    setYear(date, amount) {
        if (!date) throw 'First parameter must be a date';
        if (!amount && amount !== 0) throw 'Second parameter must be a number';

        return dayjs(date).set('year', amount).toISOString();
    },
    toTimestamp(date) {
        if (!date) throw 'First parameter must be a date';
        return dayjs(date).valueOf();
    },
    getBrowserTimezone() {
        return dayjs.tz.guess();
    },
    convertDateTimezone(date, timezone, preserve = false) {
        if (!date) throw 'First parameter must be a date';
        if (typeof timezone !== 'string') throw 'Second parameter must be a string';
        return dayjs(date).tz(timezone, preserve).format();
    },
    formatDateTimezone(
        date,
        format = this.settings.publicData.favoriteFormat,
        timezone = dayjs.tz.guess(),
        locale = this.lang
    ) {
        if (!date) throw 'First parameter must be a date';
        if (typeof format !== 'string') throw 'Second parameter must be a string';
        if (typeof timezone !== 'string') throw 'Third parameter must be a string';
        return dayjs(date)
            .tz(timezone)
            .locale(this.locales[locale] || this.backupLang)
            .format(format);
    },
};
