#define ICALL_TABLE_corlib 1

static int corlib_icall_indexes [] = {
177,
182,
183,
184,
185,
186,
187,
188,
190,
191,
258,
259,
261,
289,
290,
291,
311,
312,
313,
314,
315,
382,
383,
384,
387,
424,
425,
427,
429,
431,
433,
438,
446,
447,
448,
449,
450,
451,
452,
453,
454,
455,
594,
595,
603,
606,
608,
613,
614,
616,
617,
621,
622,
623,
624,
626,
627,
628,
631,
632,
635,
636,
637,
707,
708,
710,
718,
719,
720,
721,
722,
726,
727,
728,
729,
730,
731,
733,
734,
735,
737,
738,
739,
741,
938,
1120,
1121,
6001,
6002,
6004,
6005,
6006,
6007,
6008,
6010,
6012,
6014,
6015,
6022,
6024,
6030,
6031,
6033,
6035,
6037,
6049,
6058,
6059,
6061,
6062,
6063,
6064,
6065,
6067,
6069,
6981,
6985,
6987,
6988,
6989,
6990,
7035,
7036,
7037,
7038,
7057,
7058,
7059,
7060,
7093,
7136,
7139,
7148,
7149,
7150,
7420,
7422,
7423,
7451,
7452,
7453,
7469,
7475,
7482,
7492,
7495,
7575,
7582,
7583,
7584,
7585,
7586,
7592,
7606,
7626,
7627,
7635,
7637,
7644,
7645,
7648,
7650,
7655,
7661,
7662,
7669,
7671,
7681,
7684,
7685,
7686,
7696,
7707,
7713,
7714,
7715,
7717,
7718,
7728,
7746,
7761,
7762,
7781,
7786,
7816,
7817,
8248,
8387,
8636,
8637,
8647,
8648,
8649,
8655,
8730,
8892,
8893,
10027,
10046,
10053,
10054,
10056,
};
void ves_icall_System_Array_InternalCreate (int,int,int,int,int);
int ves_icall_System_Array_GetCorElementTypeOfElementType_raw (int,int);
int ves_icall_System_Array_CanChangePrimitive (int,int,int);
int ves_icall_System_Array_FastCopy_raw (int,int,int,int,int,int);
int ves_icall_System_Array_GetLength_raw (int,int,int);
int ves_icall_System_Array_GetLowerBound_raw (int,int,int);
void ves_icall_System_Array_GetGenericValue_icall (int,int,int);
int ves_icall_System_Array_GetValueImpl_raw (int,int,int);
void ves_icall_System_Array_SetValueImpl_raw (int,int,int,int);
void ves_icall_System_Array_SetValueRelaxedImpl_raw (int,int,int,int);
void ves_icall_System_Runtime_RuntimeImports_Memmove (int,int,int);
void ves_icall_System_Buffer_BulkMoveWithWriteBarrier (int,int,int,int);
void ves_icall_System_Runtime_RuntimeImports_ZeroMemory (int,int);
int ves_icall_System_Delegate_AllocDelegateLike_internal_raw (int,int);
int ves_icall_System_Delegate_CreateDelegate_internal_raw (int,int,int,int,int);
int ves_icall_System_Delegate_GetVirtualMethod_internal_raw (int,int);
int ves_icall_System_Enum_GetEnumValuesAndNames_raw (int,int,int,int);
int ves_icall_System_Enum_ToObject_raw (int,int64_t,int);
int ves_icall_System_Enum_InternalGetCorElementType_raw (int,int);
int ves_icall_System_Enum_get_underlying_type_raw (int,int);
int ves_icall_System_Enum_InternalHasFlag_raw (int,int,int);
int ves_icall_System_Environment_get_ProcessorCount ();
int ves_icall_System_Environment_get_TickCount ();
int64_t ves_icall_System_Environment_get_TickCount64 ();
void ves_icall_System_Environment_FailFast_raw (int,int,int,int);
void ves_icall_System_GC_register_ephemeron_array_raw (int,int);
int ves_icall_System_GC_get_ephemeron_tombstone_raw (int);
void ves_icall_System_GC_SuppressFinalize_raw (int,int);
void ves_icall_System_GC_ReRegisterForFinalize_raw (int,int);
void ves_icall_System_GC_GetGCMemoryInfo (int,int,int,int,int,int);
int ves_icall_System_GC_AllocPinnedArray_raw (int,int,int);
int ves_icall_System_Object_MemberwiseClone_raw (int,int);
double ves_icall_System_Math_Abs_double (double);
double ves_icall_System_Math_Ceiling (double);
double ves_icall_System_Math_Cos (double);
double ves_icall_System_Math_Floor (double);
double ves_icall_System_Math_Log10 (double);
double ves_icall_System_Math_Pow (double,double);
double ves_icall_System_Math_Sin (double);
double ves_icall_System_Math_Sqrt (double);
double ves_icall_System_Math_Tan (double);
double ves_icall_System_Math_ModF (double,int);
int ves_icall_RuntimeType_GetCorrespondingInflatedMethod_raw (int,int,int);
int ves_icall_RuntimeType_GetCorrespondingInflatedMethod_raw (int,int,int);
int ves_icall_RuntimeType_make_array_type_raw (int,int,int);
int ves_icall_RuntimeType_make_byref_type_raw (int,int);
int ves_icall_RuntimeType_MakePointerType_raw (int,int);
int ves_icall_RuntimeType_MakeGenericType_raw (int,int,int);
int ves_icall_RuntimeType_GetMethodsByName_native_raw (int,int,int,int,int);
int ves_icall_RuntimeType_GetPropertiesByName_native_raw (int,int,int,int,int);
int ves_icall_RuntimeType_GetConstructors_native_raw (int,int,int);
int ves_icall_System_Activator_CreateInstanceInternal_raw (int,int);
int ves_icall_RuntimeType_get_DeclaringMethod_raw (int,int);
int ves_icall_System_RuntimeType_getFullName_raw (int,int,int,int);
int ves_icall_RuntimeType_GetGenericArguments_raw (int,int,int);
int ves_icall_RuntimeType_GetGenericParameterPosition_raw (int,int);
int ves_icall_RuntimeType_GetEvents_native_raw (int,int,int,int);
int ves_icall_RuntimeType_GetFields_native_raw (int,int,int,int,int);
int ves_icall_RuntimeType_GetInterfaces_raw (int,int);
int ves_icall_RuntimeType_GetNestedTypes_native_raw (int,int,int,int,int);
int ves_icall_RuntimeType_get_DeclaringType_raw (int,int);
int ves_icall_RuntimeType_get_Name_raw (int,int);
int ves_icall_RuntimeType_get_Namespace_raw (int,int);
int ves_icall_RuntimeTypeHandle_GetAttributes_raw (int,int);
int ves_icall_reflection_get_token_raw (int,int);
int ves_icall_RuntimeTypeHandle_GetGenericTypeDefinition_impl_raw (int,int);
int ves_icall_RuntimeTypeHandle_GetCorElementType_raw (int,int);
int ves_icall_RuntimeTypeHandle_HasInstantiation_raw (int,int);
int ves_icall_RuntimeTypeHandle_IsComObject_raw (int,int);
int ves_icall_RuntimeTypeHandle_IsInstanceOfType_raw (int,int,int);
int ves_icall_RuntimeTypeHandle_HasReferences_raw (int,int);
int ves_icall_RuntimeTypeHandle_GetArrayRank_raw (int,int);
int ves_icall_RuntimeTypeHandle_GetAssembly_raw (int,int);
int ves_icall_RuntimeTypeHandle_GetElementType_raw (int,int);
int ves_icall_RuntimeTypeHandle_GetModule_raw (int,int);
int ves_icall_RuntimeTypeHandle_IsGenericVariable_raw (int,int);
int ves_icall_RuntimeTypeHandle_GetBaseType_raw (int,int);
int ves_icall_RuntimeTypeHandle_type_is_assignable_from_raw (int,int,int);
int ves_icall_RuntimeTypeHandle_IsGenericTypeDefinition_raw (int,int);
int ves_icall_RuntimeTypeHandle_GetGenericParameterInfo_raw (int,int);
int ves_icall_RuntimeTypeHandle_is_subclass_of (int,int);
int ves_icall_RuntimeTypeHandle_IsByRefLike_raw (int,int);
int ves_icall_System_RuntimeTypeHandle_internal_from_name_raw (int,int,int,int,int,int);
int ves_icall_System_String_FastAllocateString_raw (int,int);
int ves_icall_System_Type_internal_from_handle_raw (int,int);
int ves_icall_System_ValueType_InternalGetHashCode_raw (int,int,int);
int ves_icall_System_ValueType_Equals_raw (int,int,int,int);
int ves_icall_System_Threading_Interlocked_CompareExchange_Int (int,int,int);
void ves_icall_System_Threading_Interlocked_CompareExchange_Object (int,int,int,int);
int ves_icall_System_Threading_Interlocked_Decrement_Int (int);
int ves_icall_System_Threading_Interlocked_Increment_Int (int);
int64_t ves_icall_System_Threading_Interlocked_Increment_Long (int);
int ves_icall_System_Threading_Interlocked_Exchange_Int (int,int);
void ves_icall_System_Threading_Interlocked_Exchange_Object (int,int,int);
int64_t ves_icall_System_Threading_Interlocked_CompareExchange_Long (int,int64_t,int64_t);
int64_t ves_icall_System_Threading_Interlocked_Exchange_Long (int,int64_t);
int ves_icall_System_Threading_Interlocked_Add_Int (int,int);
int64_t ves_icall_System_Threading_Interlocked_Add_Long (int,int64_t);
void ves_icall_System_Threading_Monitor_Monitor_Enter_raw (int,int);
void mono_monitor_exit_icall_raw (int,int);
int ves_icall_System_Threading_Monitor_Monitor_test_synchronised_raw (int,int);
void ves_icall_System_Threading_Monitor_Monitor_pulse_raw (int,int);
void ves_icall_System_Threading_Monitor_Monitor_pulse_all_raw (int,int);
int ves_icall_System_Threading_Monitor_Monitor_wait_raw (int,int,int,int);
void ves_icall_System_Threading_Monitor_Monitor_try_enter_with_atomic_var_raw (int,int,int,int,int);
int ves_icall_System_Threading_Thread_GetCurrentProcessorNumber_raw (int);
void ves_icall_System_Threading_Thread_InitInternal_raw (int,int);
int ves_icall_System_Threading_Thread_GetCurrentThread ();
void ves_icall_System_Threading_InternalThread_Thread_free_internal_raw (int,int);
int ves_icall_System_Threading_Thread_GetState_raw (int,int);
void ves_icall_System_Threading_Thread_SetState_raw (int,int,int);
void ves_icall_System_Threading_Thread_ClrState_raw (int,int,int);
void ves_icall_System_Threading_Thread_SetName_icall_raw (int,int,int,int);
int ves_icall_System_Threading_Thread_YieldInternal ();
void ves_icall_System_Threading_Thread_SetPriority_raw (int,int,int);
void ves_icall_System_Runtime_Loader_AssemblyLoadContext_PrepareForAssemblyLoadContextRelease_raw (int,int,int);
int ves_icall_System_Runtime_Loader_AssemblyLoadContext_GetLoadContextForAssembly_raw (int,int);
int ves_icall_System_Runtime_Loader_AssemblyLoadContext_InternalLoadFile_raw (int,int,int,int);
int ves_icall_System_Runtime_Loader_AssemblyLoadContext_InternalInitializeNativeALC_raw (int,int,int,int,int);
int ves_icall_System_Runtime_Loader_AssemblyLoadContext_InternalLoadFromStream_raw (int,int,int,int,int,int);
int ves_icall_System_Runtime_Loader_AssemblyLoadContext_InternalGetLoadedAssemblies_raw (int);
int ves_icall_System_GCHandle_InternalAlloc_raw (int,int,int);
void ves_icall_System_GCHandle_InternalFree_raw (int,int);
int ves_icall_System_GCHandle_InternalGet_raw (int,int);
void ves_icall_System_GCHandle_InternalSet_raw (int,int,int);
int ves_icall_System_Runtime_InteropServices_Marshal_GetLastPInvokeError ();
void ves_icall_System_Runtime_InteropServices_Marshal_SetLastPInvokeError (int);
void ves_icall_System_Runtime_InteropServices_Marshal_StructureToPtr_raw (int,int,int,int);
int ves_icall_System_Runtime_InteropServices_Marshal_IsPinnableType_raw (int,int);
int ves_icall_System_Runtime_InteropServices_NativeLibrary_LoadByName_raw (int,int,int,int,int,int);
int mono_object_hash_icall_raw (int,int);
int ves_icall_System_Runtime_CompilerServices_RuntimeHelpers_GetObjectValue_raw (int,int);
int ves_icall_System_Runtime_CompilerServices_RuntimeHelpers_GetUninitializedObjectInternal_raw (int,int);
void ves_icall_System_Runtime_CompilerServices_RuntimeHelpers_InitializeArray_raw (int,int,int);
int ves_icall_System_Runtime_CompilerServices_RuntimeHelpers_SufficientExecutionStack ();
int ves_icall_System_Reflection_Assembly_GetEntryAssembly_raw (int);
int ves_icall_System_Reflection_Assembly_InternalLoad_raw (int,int,int,int);
int ves_icall_System_Reflection_Assembly_InternalGetType_raw (int,int,int,int,int,int);
void mono_digest_get_public_token (int,int,int);
int ves_icall_System_Reflection_AssemblyName_GetNativeName (int);
int ves_icall_System_Reflection_AssemblyName_ParseAssemblyName (int,int,int,int);
int ves_icall_MonoCustomAttrs_GetCustomAttributesInternal_raw (int,int,int,int);
int ves_icall_MonoCustomAttrs_GetCustomAttributesDataInternal_raw (int,int);
int ves_icall_MonoCustomAttrs_IsDefinedInternal_raw (int,int,int);
int ves_icall_System_Reflection_FieldInfo_internal_from_handle_type_raw (int,int,int);
int ves_icall_System_Reflection_FieldInfo_get_marshal_info_raw (int,int);
int ves_icall_System_Reflection_RuntimeAssembly_GetExportedTypes_raw (int,int);
int ves_icall_System_Reflection_RuntimeAssembly_get_location_raw (int,int);
int ves_icall_System_Reflection_RuntimeAssembly_get_code_base_raw (int,int);
int ves_icall_System_Reflection_RuntimeAssembly_get_fullname_raw (int,int);
int ves_icall_System_Reflection_Assembly_GetManifestModuleInternal_raw (int,int);
int ves_icall_System_Reflection_RuntimeAssembly_GetModulesInternal_raw (int,int);
void ves_icall_System_Reflection_RuntimeCustomAttributeData_ResolveArgumentsInternal_raw (int,int,int,int,int,int,int);
void ves_icall_RuntimeEventInfo_get_event_info_raw (int,int,int);
int ves_icall_reflection_get_token_raw (int,int);
int ves_icall_System_Reflection_EventInfo_internal_from_handle_type_raw (int,int,int);
int ves_icall_RuntimeFieldInfo_ResolveType_raw (int,int);
int ves_icall_RuntimeFieldInfo_GetParentType_raw (int,int,int);
int ves_icall_RuntimeFieldInfo_GetFieldOffset_raw (int,int);
int ves_icall_RuntimeFieldInfo_GetValueInternal_raw (int,int,int);
void ves_icall_RuntimeFieldInfo_SetValueInternal_raw (int,int,int,int);
int ves_icall_RuntimeFieldInfo_GetRawConstantValue_raw (int,int);
int ves_icall_reflection_get_token_raw (int,int);
void ves_icall_get_method_info_raw (int,int,int);
int ves_icall_get_method_attributes (int);
int ves_icall_System_Reflection_MonoMethodInfo_get_parameter_info_raw (int,int,int);
int ves_icall_System_MonoMethodInfo_get_retval_marshal_raw (int,int);
int ves_icall_System_Reflection_RuntimeMethodInfo_GetMethodFromHandleInternalType_native_raw (int,int,int,int);
int ves_icall_RuntimeMethodInfo_get_name_raw (int,int);
int ves_icall_RuntimeMethodInfo_get_base_method_raw (int,int,int);
int ves_icall_reflection_get_token_raw (int,int);
int ves_icall_InternalInvoke_raw (int,int,int,int,int);
void ves_icall_RuntimeMethodInfo_GetPInvoke_raw (int,int,int,int,int);
int ves_icall_RuntimeMethodInfo_MakeGenericMethod_impl_raw (int,int,int);
int ves_icall_RuntimeMethodInfo_GetGenericArguments_raw (int,int);
int ves_icall_RuntimeMethodInfo_GetGenericMethodDefinition_raw (int,int);
int ves_icall_RuntimeMethodInfo_get_IsGenericMethodDefinition_raw (int,int);
int ves_icall_RuntimeMethodInfo_get_IsGenericMethod_raw (int,int);
int ves_icall_InternalInvoke_raw (int,int,int,int,int);
int ves_icall_reflection_get_token_raw (int,int);
int ves_icall_System_Reflection_RuntimeModule_InternalGetTypes_raw (int,int);
int ves_icall_System_Reflection_RuntimeModule_ResolveMethodToken_raw (int,int,int,int,int,int);
int ves_icall_RuntimeParameterInfo_GetTypeModifiers_raw (int,int,int,int,int);
void ves_icall_RuntimePropertyInfo_get_property_info_raw (int,int,int,int);
int ves_icall_reflection_get_token_raw (int,int);
int ves_icall_System_Reflection_RuntimePropertyInfo_internal_from_handle_type_raw (int,int,int);
void ves_icall_AssemblyBuilder_basic_init_raw (int,int);
void ves_icall_DynamicMethod_create_dynamic_method_raw (int,int);
void ves_icall_ModuleBuilder_basic_init_raw (int,int);
void ves_icall_ModuleBuilder_set_wrappers_type_raw (int,int,int);
int ves_icall_ModuleBuilder_getUSIndex_raw (int,int,int);
int ves_icall_ModuleBuilder_getToken_raw (int,int,int,int);
int ves_icall_ModuleBuilder_getMethodToken_raw (int,int,int,int);
void ves_icall_ModuleBuilder_RegisterToken_raw (int,int,int,int);
int ves_icall_TypeBuilder_create_runtime_class_raw (int,int);
int ves_icall_System_IO_Stream_HasOverriddenBeginEndRead_raw (int,int);
int ves_icall_System_IO_Stream_HasOverriddenBeginEndWrite_raw (int,int);
int ves_icall_Mono_RuntimeClassHandle_GetTypeFromClass (int);
void ves_icall_Mono_RuntimeGPtrArrayHandle_GPtrArrayFree (int);
void ves_icall_Mono_RuntimeMarshal_FreeAssemblyName (int,int);
int ves_icall_Mono_SafeStringMarshal_StringToUtf8 (int);
void ves_icall_Mono_SafeStringMarshal_GFree (int);
static void *corlib_icall_funcs [] = {
// token 177,
ves_icall_System_Array_InternalCreate,
// token 182,
ves_icall_System_Array_GetCorElementTypeOfElementType_raw,
// token 183,
ves_icall_System_Array_CanChangePrimitive,
// token 184,
ves_icall_System_Array_FastCopy_raw,
// token 185,
ves_icall_System_Array_GetLength_raw,
// token 186,
ves_icall_System_Array_GetLowerBound_raw,
// token 187,
ves_icall_System_Array_GetGenericValue_icall,
// token 188,
ves_icall_System_Array_GetValueImpl_raw,
// token 190,
ves_icall_System_Array_SetValueImpl_raw,
// token 191,
ves_icall_System_Array_SetValueRelaxedImpl_raw,
// token 258,
ves_icall_System_Runtime_RuntimeImports_Memmove,
// token 259,
ves_icall_System_Buffer_BulkMoveWithWriteBarrier,
// token 261,
ves_icall_System_Runtime_RuntimeImports_ZeroMemory,
// token 289,
ves_icall_System_Delegate_AllocDelegateLike_internal_raw,
// token 290,
ves_icall_System_Delegate_CreateDelegate_internal_raw,
// token 291,
ves_icall_System_Delegate_GetVirtualMethod_internal_raw,
// token 311,
ves_icall_System_Enum_GetEnumValuesAndNames_raw,
// token 312,
ves_icall_System_Enum_ToObject_raw,
// token 313,
ves_icall_System_Enum_InternalGetCorElementType_raw,
// token 314,
ves_icall_System_Enum_get_underlying_type_raw,
// token 315,
ves_icall_System_Enum_InternalHasFlag_raw,
// token 382,
ves_icall_System_Environment_get_ProcessorCount,
// token 383,
ves_icall_System_Environment_get_TickCount,
// token 384,
ves_icall_System_Environment_get_TickCount64,
// token 387,
ves_icall_System_Environment_FailFast_raw,
// token 424,
ves_icall_System_GC_register_ephemeron_array_raw,
// token 425,
ves_icall_System_GC_get_ephemeron_tombstone_raw,
// token 427,
ves_icall_System_GC_SuppressFinalize_raw,
// token 429,
ves_icall_System_GC_ReRegisterForFinalize_raw,
// token 431,
ves_icall_System_GC_GetGCMemoryInfo,
// token 433,
ves_icall_System_GC_AllocPinnedArray_raw,
// token 438,
ves_icall_System_Object_MemberwiseClone_raw,
// token 446,
ves_icall_System_Math_Abs_double,
// token 447,
ves_icall_System_Math_Ceiling,
// token 448,
ves_icall_System_Math_Cos,
// token 449,
ves_icall_System_Math_Floor,
// token 450,
ves_icall_System_Math_Log10,
// token 451,
ves_icall_System_Math_Pow,
// token 452,
ves_icall_System_Math_Sin,
// token 453,
ves_icall_System_Math_Sqrt,
// token 454,
ves_icall_System_Math_Tan,
// token 455,
ves_icall_System_Math_ModF,
// token 594,
ves_icall_RuntimeType_GetCorrespondingInflatedMethod_raw,
// token 595,
ves_icall_RuntimeType_GetCorrespondingInflatedMethod_raw,
// token 603,
ves_icall_RuntimeType_make_array_type_raw,
// token 606,
ves_icall_RuntimeType_make_byref_type_raw,
// token 608,
ves_icall_RuntimeType_MakePointerType_raw,
// token 613,
ves_icall_RuntimeType_MakeGenericType_raw,
// token 614,
ves_icall_RuntimeType_GetMethodsByName_native_raw,
// token 616,
ves_icall_RuntimeType_GetPropertiesByName_native_raw,
// token 617,
ves_icall_RuntimeType_GetConstructors_native_raw,
// token 621,
ves_icall_System_Activator_CreateInstanceInternal_raw,
// token 622,
ves_icall_RuntimeType_get_DeclaringMethod_raw,
// token 623,
ves_icall_System_RuntimeType_getFullName_raw,
// token 624,
ves_icall_RuntimeType_GetGenericArguments_raw,
// token 626,
ves_icall_RuntimeType_GetGenericParameterPosition_raw,
// token 627,
ves_icall_RuntimeType_GetEvents_native_raw,
// token 628,
ves_icall_RuntimeType_GetFields_native_raw,
// token 631,
ves_icall_RuntimeType_GetInterfaces_raw,
// token 632,
ves_icall_RuntimeType_GetNestedTypes_native_raw,
// token 635,
ves_icall_RuntimeType_get_DeclaringType_raw,
// token 636,
ves_icall_RuntimeType_get_Name_raw,
// token 637,
ves_icall_RuntimeType_get_Namespace_raw,
// token 707,
ves_icall_RuntimeTypeHandle_GetAttributes_raw,
// token 708,
ves_icall_reflection_get_token_raw,
// token 710,
ves_icall_RuntimeTypeHandle_GetGenericTypeDefinition_impl_raw,
// token 718,
ves_icall_RuntimeTypeHandle_GetCorElementType_raw,
// token 719,
ves_icall_RuntimeTypeHandle_HasInstantiation_raw,
// token 720,
ves_icall_RuntimeTypeHandle_IsComObject_raw,
// token 721,
ves_icall_RuntimeTypeHandle_IsInstanceOfType_raw,
// token 722,
ves_icall_RuntimeTypeHandle_HasReferences_raw,
// token 726,
ves_icall_RuntimeTypeHandle_GetArrayRank_raw,
// token 727,
ves_icall_RuntimeTypeHandle_GetAssembly_raw,
// token 728,
ves_icall_RuntimeTypeHandle_GetElementType_raw,
// token 729,
ves_icall_RuntimeTypeHandle_GetModule_raw,
// token 730,
ves_icall_RuntimeTypeHandle_IsGenericVariable_raw,
// token 731,
ves_icall_RuntimeTypeHandle_GetBaseType_raw,
// token 733,
ves_icall_RuntimeTypeHandle_type_is_assignable_from_raw,
// token 734,
ves_icall_RuntimeTypeHandle_IsGenericTypeDefinition_raw,
// token 735,
ves_icall_RuntimeTypeHandle_GetGenericParameterInfo_raw,
// token 737,
ves_icall_RuntimeTypeHandle_is_subclass_of,
// token 738,
ves_icall_RuntimeTypeHandle_IsByRefLike_raw,
// token 739,
ves_icall_System_RuntimeTypeHandle_internal_from_name_raw,
// token 741,
ves_icall_System_String_FastAllocateString_raw,
// token 938,
ves_icall_System_Type_internal_from_handle_raw,
// token 1120,
ves_icall_System_ValueType_InternalGetHashCode_raw,
// token 1121,
ves_icall_System_ValueType_Equals_raw,
// token 6001,
ves_icall_System_Threading_Interlocked_CompareExchange_Int,
// token 6002,
ves_icall_System_Threading_Interlocked_CompareExchange_Object,
// token 6004,
ves_icall_System_Threading_Interlocked_Decrement_Int,
// token 6005,
ves_icall_System_Threading_Interlocked_Increment_Int,
// token 6006,
ves_icall_System_Threading_Interlocked_Increment_Long,
// token 6007,
ves_icall_System_Threading_Interlocked_Exchange_Int,
// token 6008,
ves_icall_System_Threading_Interlocked_Exchange_Object,
// token 6010,
ves_icall_System_Threading_Interlocked_CompareExchange_Long,
// token 6012,
ves_icall_System_Threading_Interlocked_Exchange_Long,
// token 6014,
ves_icall_System_Threading_Interlocked_Add_Int,
// token 6015,
ves_icall_System_Threading_Interlocked_Add_Long,
// token 6022,
ves_icall_System_Threading_Monitor_Monitor_Enter_raw,
// token 6024,
mono_monitor_exit_icall_raw,
// token 6030,
ves_icall_System_Threading_Monitor_Monitor_test_synchronised_raw,
// token 6031,
ves_icall_System_Threading_Monitor_Monitor_pulse_raw,
// token 6033,
ves_icall_System_Threading_Monitor_Monitor_pulse_all_raw,
// token 6035,
ves_icall_System_Threading_Monitor_Monitor_wait_raw,
// token 6037,
ves_icall_System_Threading_Monitor_Monitor_try_enter_with_atomic_var_raw,
// token 6049,
ves_icall_System_Threading_Thread_GetCurrentProcessorNumber_raw,
// token 6058,
ves_icall_System_Threading_Thread_InitInternal_raw,
// token 6059,
ves_icall_System_Threading_Thread_GetCurrentThread,
// token 6061,
ves_icall_System_Threading_InternalThread_Thread_free_internal_raw,
// token 6062,
ves_icall_System_Threading_Thread_GetState_raw,
// token 6063,
ves_icall_System_Threading_Thread_SetState_raw,
// token 6064,
ves_icall_System_Threading_Thread_ClrState_raw,
// token 6065,
ves_icall_System_Threading_Thread_SetName_icall_raw,
// token 6067,
ves_icall_System_Threading_Thread_YieldInternal,
// token 6069,
ves_icall_System_Threading_Thread_SetPriority_raw,
// token 6981,
ves_icall_System_Runtime_Loader_AssemblyLoadContext_PrepareForAssemblyLoadContextRelease_raw,
// token 6985,
ves_icall_System_Runtime_Loader_AssemblyLoadContext_GetLoadContextForAssembly_raw,
// token 6987,
ves_icall_System_Runtime_Loader_AssemblyLoadContext_InternalLoadFile_raw,
// token 6988,
ves_icall_System_Runtime_Loader_AssemblyLoadContext_InternalInitializeNativeALC_raw,
// token 6989,
ves_icall_System_Runtime_Loader_AssemblyLoadContext_InternalLoadFromStream_raw,
// token 6990,
ves_icall_System_Runtime_Loader_AssemblyLoadContext_InternalGetLoadedAssemblies_raw,
// token 7035,
ves_icall_System_GCHandle_InternalAlloc_raw,
// token 7036,
ves_icall_System_GCHandle_InternalFree_raw,
// token 7037,
ves_icall_System_GCHandle_InternalGet_raw,
// token 7038,
ves_icall_System_GCHandle_InternalSet_raw,
// token 7057,
ves_icall_System_Runtime_InteropServices_Marshal_GetLastPInvokeError,
// token 7058,
ves_icall_System_Runtime_InteropServices_Marshal_SetLastPInvokeError,
// token 7059,
ves_icall_System_Runtime_InteropServices_Marshal_StructureToPtr_raw,
// token 7060,
ves_icall_System_Runtime_InteropServices_Marshal_IsPinnableType_raw,
// token 7093,
ves_icall_System_Runtime_InteropServices_NativeLibrary_LoadByName_raw,
// token 7136,
mono_object_hash_icall_raw,
// token 7139,
ves_icall_System_Runtime_CompilerServices_RuntimeHelpers_GetObjectValue_raw,
// token 7148,
ves_icall_System_Runtime_CompilerServices_RuntimeHelpers_GetUninitializedObjectInternal_raw,
// token 7149,
ves_icall_System_Runtime_CompilerServices_RuntimeHelpers_InitializeArray_raw,
// token 7150,
ves_icall_System_Runtime_CompilerServices_RuntimeHelpers_SufficientExecutionStack,
// token 7420,
ves_icall_System_Reflection_Assembly_GetEntryAssembly_raw,
// token 7422,
ves_icall_System_Reflection_Assembly_InternalLoad_raw,
// token 7423,
ves_icall_System_Reflection_Assembly_InternalGetType_raw,
// token 7451,
mono_digest_get_public_token,
// token 7452,
ves_icall_System_Reflection_AssemblyName_GetNativeName,
// token 7453,
ves_icall_System_Reflection_AssemblyName_ParseAssemblyName,
// token 7469,
ves_icall_MonoCustomAttrs_GetCustomAttributesInternal_raw,
// token 7475,
ves_icall_MonoCustomAttrs_GetCustomAttributesDataInternal_raw,
// token 7482,
ves_icall_MonoCustomAttrs_IsDefinedInternal_raw,
// token 7492,
ves_icall_System_Reflection_FieldInfo_internal_from_handle_type_raw,
// token 7495,
ves_icall_System_Reflection_FieldInfo_get_marshal_info_raw,
// token 7575,
ves_icall_System_Reflection_RuntimeAssembly_GetExportedTypes_raw,
// token 7582,
ves_icall_System_Reflection_RuntimeAssembly_get_location_raw,
// token 7583,
ves_icall_System_Reflection_RuntimeAssembly_get_code_base_raw,
// token 7584,
ves_icall_System_Reflection_RuntimeAssembly_get_fullname_raw,
// token 7585,
ves_icall_System_Reflection_Assembly_GetManifestModuleInternal_raw,
// token 7586,
ves_icall_System_Reflection_RuntimeAssembly_GetModulesInternal_raw,
// token 7592,
ves_icall_System_Reflection_RuntimeCustomAttributeData_ResolveArgumentsInternal_raw,
// token 7606,
ves_icall_RuntimeEventInfo_get_event_info_raw,
// token 7626,
ves_icall_reflection_get_token_raw,
// token 7627,
ves_icall_System_Reflection_EventInfo_internal_from_handle_type_raw,
// token 7635,
ves_icall_RuntimeFieldInfo_ResolveType_raw,
// token 7637,
ves_icall_RuntimeFieldInfo_GetParentType_raw,
// token 7644,
ves_icall_RuntimeFieldInfo_GetFieldOffset_raw,
// token 7645,
ves_icall_RuntimeFieldInfo_GetValueInternal_raw,
// token 7648,
ves_icall_RuntimeFieldInfo_SetValueInternal_raw,
// token 7650,
ves_icall_RuntimeFieldInfo_GetRawConstantValue_raw,
// token 7655,
ves_icall_reflection_get_token_raw,
// token 7661,
ves_icall_get_method_info_raw,
// token 7662,
ves_icall_get_method_attributes,
// token 7669,
ves_icall_System_Reflection_MonoMethodInfo_get_parameter_info_raw,
// token 7671,
ves_icall_System_MonoMethodInfo_get_retval_marshal_raw,
// token 7681,
ves_icall_System_Reflection_RuntimeMethodInfo_GetMethodFromHandleInternalType_native_raw,
// token 7684,
ves_icall_RuntimeMethodInfo_get_name_raw,
// token 7685,
ves_icall_RuntimeMethodInfo_get_base_method_raw,
// token 7686,
ves_icall_reflection_get_token_raw,
// token 7696,
ves_icall_InternalInvoke_raw,
// token 7707,
ves_icall_RuntimeMethodInfo_GetPInvoke_raw,
// token 7713,
ves_icall_RuntimeMethodInfo_MakeGenericMethod_impl_raw,
// token 7714,
ves_icall_RuntimeMethodInfo_GetGenericArguments_raw,
// token 7715,
ves_icall_RuntimeMethodInfo_GetGenericMethodDefinition_raw,
// token 7717,
ves_icall_RuntimeMethodInfo_get_IsGenericMethodDefinition_raw,
// token 7718,
ves_icall_RuntimeMethodInfo_get_IsGenericMethod_raw,
// token 7728,
ves_icall_InternalInvoke_raw,
// token 7746,
ves_icall_reflection_get_token_raw,
// token 7761,
ves_icall_System_Reflection_RuntimeModule_InternalGetTypes_raw,
// token 7762,
ves_icall_System_Reflection_RuntimeModule_ResolveMethodToken_raw,
// token 7781,
ves_icall_RuntimeParameterInfo_GetTypeModifiers_raw,
// token 7786,
ves_icall_RuntimePropertyInfo_get_property_info_raw,
// token 7816,
ves_icall_reflection_get_token_raw,
// token 7817,
ves_icall_System_Reflection_RuntimePropertyInfo_internal_from_handle_type_raw,
// token 8248,
ves_icall_AssemblyBuilder_basic_init_raw,
// token 8387,
ves_icall_DynamicMethod_create_dynamic_method_raw,
// token 8636,
ves_icall_ModuleBuilder_basic_init_raw,
// token 8637,
ves_icall_ModuleBuilder_set_wrappers_type_raw,
// token 8647,
ves_icall_ModuleBuilder_getUSIndex_raw,
// token 8648,
ves_icall_ModuleBuilder_getToken_raw,
// token 8649,
ves_icall_ModuleBuilder_getMethodToken_raw,
// token 8655,
ves_icall_ModuleBuilder_RegisterToken_raw,
// token 8730,
ves_icall_TypeBuilder_create_runtime_class_raw,
// token 8892,
ves_icall_System_IO_Stream_HasOverriddenBeginEndRead_raw,
// token 8893,
ves_icall_System_IO_Stream_HasOverriddenBeginEndWrite_raw,
// token 10027,
ves_icall_Mono_RuntimeClassHandle_GetTypeFromClass,
// token 10046,
ves_icall_Mono_RuntimeGPtrArrayHandle_GPtrArrayFree,
// token 10053,
ves_icall_Mono_RuntimeMarshal_FreeAssemblyName,
// token 10054,
ves_icall_Mono_SafeStringMarshal_StringToUtf8,
// token 10056,
ves_icall_Mono_SafeStringMarshal_GFree,
};
static uint8_t corlib_icall_handles [] = {
0,
1,
0,
1,
1,
1,
0,
1,
1,
1,
0,
0,
0,
1,
1,
1,
1,
1,
1,
1,
1,
0,
0,
0,
1,
1,
1,
1,
1,
0,
1,
1,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
0,
1,
1,
1,
1,
1,
1,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
1,
1,
1,
1,
1,
1,
1,
1,
1,
0,
1,
1,
1,
1,
1,
0,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
0,
0,
1,
1,
1,
1,
1,
1,
1,
0,
1,
1,
1,
0,
0,
0,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
0,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
0,
0,
0,
0,
0,
};
