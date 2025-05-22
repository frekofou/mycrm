import { defineStore } from 'pinia';
import { getInheritedConfiguration } from '@/_common/helpers/configuration/configuration';
 
export const useComponentBasesStore = defineStore('componentBases', () => {
    let configurations;
    /* wwFront:start */
    // eslint-disable-next-line no-undef
    configurations = {'plugin-f5856798-485d-47be-b433-d43d771c64e1': getInheritedConfiguration({ ...require('@/components/plugins/plugin-f5856798-485d-47be-b433-d43d771c64e1/ww-config.js').default, name: 'plugin-f5856798-485d-47be-b433-d43d771c64e1' }),
'plugin-cd33cf33-e29f-4e8c-ac26-b997fe507ce7': getInheritedConfiguration({ ...require('@/components/plugins/plugin-cd33cf33-e29f-4e8c-ac26-b997fe507ce7/ww-config.js').default, name: 'plugin-cd33cf33-e29f-4e8c-ac26-b997fe507ce7' }),
'plugin-00d22f72-1a03-44f8-ad68-c593dc80b543': getInheritedConfiguration({ ...require('@/components/plugins/plugin-00d22f72-1a03-44f8-ad68-c593dc80b543/ww-config.js').default, name: 'plugin-00d22f72-1a03-44f8-ad68-c593dc80b543' }),
'plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb': getInheritedConfiguration({ ...require('@/components/plugins/plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb/ww-config.js').default, name: 'plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb' }),
'plugin-ee24f5ac-e15e-4ddd-baa4-0b4baedf90c9': getInheritedConfiguration({ ...require('@/components/plugins/plugin-ee24f5ac-e15e-4ddd-baa4-0b4baedf90c9/ww-config.js').default, name: 'plugin-ee24f5ac-e15e-4ddd-baa4-0b4baedf90c9' }),
'plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811': getInheritedConfiguration({ ...require('@/components/plugins/plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811/ww-config.js').default, name: 'plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811' }),
'plugin-9c40819b-4a8f-468f-9ba5-4b9699f3361f': getInheritedConfiguration({ ...require('@/components/plugins/plugin-9c40819b-4a8f-468f-9ba5-4b9699f3361f/ww-config.js').default, name: 'plugin-9c40819b-4a8f-468f-9ba5-4b9699f3361f' }),
'section-99586bd3-2b15-4d6b-a025-6a50d07ca845': getInheritedConfiguration({ ...require('@/components/sections/section-99586bd3-2b15-4d6b-a025-6a50d07ca845/ww-config.js').default, name: 'section-99586bd3-2b15-4d6b-a025-6a50d07ca845' }),
'section-ef0ecc71-9a59-4eab-94b0-b36d66d3d61d': getInheritedConfiguration({ ...require('@/components/sections/section-ef0ecc71-9a59-4eab-94b0-b36d66d3d61d/ww-config.js').default, name: 'section-ef0ecc71-9a59-4eab-94b0-b36d66d3d61d' }),
'wwobject-2dff5957-3bd8-46f9-afa3-a5c5bab91931': getInheritedConfiguration({ ...require('@/components/elements/element-2dff5957-3bd8-46f9-afa3-a5c5bab91931/ww-config.js').default, name: 'wwobject-2dff5957-3bd8-46f9-afa3-a5c5bab91931' }),
'wwobject-21881619-a984-4847-81a9-922c3dbb5853': getInheritedConfiguration({ ...require('@/components/elements/element-21881619-a984-4847-81a9-922c3dbb5853/ww-config.js').default, name: 'wwobject-21881619-a984-4847-81a9-922c3dbb5853' }),
'wwobject-84bb3944-0404-4c4e-b0d5-058a63e4554a': getInheritedConfiguration({ ...require('@/components/elements/element-84bb3944-0404-4c4e-b0d5-058a63e4554a/ww-config.js').default, name: 'wwobject-84bb3944-0404-4c4e-b0d5-058a63e4554a' }),
'wwobject-1ba25bdf-dee9-4e0e-a0b8-b3f3128c3b65': getInheritedConfiguration({ ...require('@/components/elements/element-1ba25bdf-dee9-4e0e-a0b8-b3f3128c3b65/ww-config.js').default, name: 'wwobject-1ba25bdf-dee9-4e0e-a0b8-b3f3128c3b65' }),
'wwobject-99ea5bf7-b91e-43ea-8ec3-dbaf2b171e34': getInheritedConfiguration({ ...require('@/components/elements/element-99ea5bf7-b91e-43ea-8ec3-dbaf2b171e34/ww-config.js').default, name: 'wwobject-99ea5bf7-b91e-43ea-8ec3-dbaf2b171e34' }),
'wwobject-cb7c3213-5c98-45b1-adff-b16f7edaf82d': getInheritedConfiguration({ ...require('@/components/elements/element-cb7c3213-5c98-45b1-adff-b16f7edaf82d/ww-config.js').default, name: 'wwobject-cb7c3213-5c98-45b1-adff-b16f7edaf82d' }),
'wwobject-faf7b16f-26ea-4368-8720-1563d265cd31': getInheritedConfiguration({ ...require('@/components/elements/element-faf7b16f-26ea-4368-8720-1563d265cd31/ww-config.js').default, name: 'wwobject-faf7b16f-26ea-4368-8720-1563d265cd31' }),
'wwobject-9c263ffe-7da7-45e7-832c-543aef56faef': getInheritedConfiguration({ ...require('@/components/elements/element-9c263ffe-7da7-45e7-832c-543aef56faef/ww-config.js').default, name: 'wwobject-9c263ffe-7da7-45e7-832c-543aef56faef' }),
'wwobject-0dc461bb-103e-4b2e-80e0-846ec3c30a6e': getInheritedConfiguration({ ...require('@/components/elements/element-0dc461bb-103e-4b2e-80e0-846ec3c30a6e/ww-config.js').default, name: 'wwobject-0dc461bb-103e-4b2e-80e0-846ec3c30a6e' }),
'wwobject-53401515-b694-4c79-a88d-abeecb1de562': getInheritedConfiguration({ ...require('@/components/elements/element-53401515-b694-4c79-a88d-abeecb1de562/ww-config.js').default, name: 'wwobject-53401515-b694-4c79-a88d-abeecb1de562' }),
'wwobject-69d0b3ef-b265-494c-8cd1-874da4aa1834': getInheritedConfiguration({ ...require('@/components/elements/element-69d0b3ef-b265-494c-8cd1-874da4aa1834/ww-config.js').default, name: 'wwobject-69d0b3ef-b265-494c-8cd1-874da4aa1834' }),
'wwobject-3a7d6379-12d3-4387-98ff-b332bb492a63': getInheritedConfiguration({ ...require('@/components/elements/element-3a7d6379-12d3-4387-98ff-b332bb492a63/ww-config.js').default, name: 'wwobject-3a7d6379-12d3-4387-98ff-b332bb492a63' }),
'wwobject-e1e0ffa9-23af-471f-ac5a-6b49f508c653': getInheritedConfiguration({ ...require('@/components/elements/element-e1e0ffa9-23af-471f-ac5a-6b49f508c653/ww-config.js').default, name: 'wwobject-e1e0ffa9-23af-471f-ac5a-6b49f508c653' }),
'wwobject-b783dc65-d528-4f74-8c14-e27c934c39b1': getInheritedConfiguration({ ...require('@/components/elements/element-b783dc65-d528-4f74-8c14-e27c934c39b1/ww-config.js').default, name: 'wwobject-b783dc65-d528-4f74-8c14-e27c934c39b1' }),
'wwobject-83d890fb-84f9-4386-b459-fb4be89a8e15': getInheritedConfiguration({ ...require('@/components/elements/element-83d890fb-84f9-4386-b459-fb4be89a8e15/ww-config.js').default, name: 'wwobject-83d890fb-84f9-4386-b459-fb4be89a8e15' }),
'wwobject-6f8796b1-8273-498d-95fc-7013b7c63214': getInheritedConfiguration({ ...require('@/components/elements/element-6f8796b1-8273-498d-95fc-7013b7c63214/ww-config.js').default, name: 'wwobject-6f8796b1-8273-498d-95fc-7013b7c63214' }),
'wwobject-88ef76b6-46d5-4685-878f-2f1fa0d54cb8': getInheritedConfiguration({ ...require('@/components/elements/element-88ef76b6-46d5-4685-878f-2f1fa0d54cb8/ww-config.js').default, name: 'wwobject-88ef76b6-46d5-4685-878f-2f1fa0d54cb8' }),
'wwobject-d7904e9d-fc9a-4d80-9e32-728e097879ad': getInheritedConfiguration({ ...require('@/components/elements/element-d7904e9d-fc9a-4d80-9e32-728e097879ad/ww-config.js').default, name: 'wwobject-d7904e9d-fc9a-4d80-9e32-728e097879ad' }),
'wwobject-6dee3327-9afa-4b44-bade-bdb547cdb18b': getInheritedConfiguration({ ...require('@/components/elements/element-6dee3327-9afa-4b44-bade-bdb547cdb18b/ww-config.js').default, name: 'wwobject-6dee3327-9afa-4b44-bade-bdb547cdb18b' }),
'wwobject-aa27b26f-0686-4c29-98c5-8217044045b7': getInheritedConfiguration({ ...require('@/components/elements/element-aa27b26f-0686-4c29-98c5-8217044045b7/ww-config.js').default, name: 'wwobject-aa27b26f-0686-4c29-98c5-8217044045b7' }),
'wwobject-e5e2f367-38d3-41fc-a938-7d221dd4691b': getInheritedConfiguration({ ...require('@/components/elements/element-e5e2f367-38d3-41fc-a938-7d221dd4691b/ww-config.js').default, name: 'wwobject-e5e2f367-38d3-41fc-a938-7d221dd4691b' }),
'wwobject-9202d35c-2813-45bc-a7f3-0adb85f83e5e': getInheritedConfiguration({ ...require('@/components/elements/element-9202d35c-2813-45bc-a7f3-0adb85f83e5e/ww-config.js').default, name: 'wwobject-9202d35c-2813-45bc-a7f3-0adb85f83e5e' }),
'wwobject-6d692ca2-6cdc-4805-aa0c-211102f335d0': getInheritedConfiguration({ ...require('@/components/elements/element-6d692ca2-6cdc-4805-aa0c-211102f335d0/ww-config.js').default, name: 'wwobject-6d692ca2-6cdc-4805-aa0c-211102f335d0' }),
'wwobject-deb10a01-5eef-4aa1-9017-1b51c2ad6fd0': getInheritedConfiguration({ ...require('@/components/elements/element-deb10a01-5eef-4aa1-9017-1b51c2ad6fd0/ww-config.js').default, name: 'wwobject-deb10a01-5eef-4aa1-9017-1b51c2ad6fd0' })};
    /* wwFront:end */
 
    return {
        configurations,
     };
});
