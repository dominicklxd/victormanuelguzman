ALTER TABLE "solicitudesMatriculacion"
ADD COLUMN provincia_vivienda VARCHAR(100), -- Provincia de la vivienda
ADD COLUMN ciudad VARCHAR(100), -- Ciudad de la vivienda
ADD COLUMN parroquia VARCHAR(100), -- Parroquia de la vivienda
ADD COLUMN sector VARCHAR(100), -- Sector de la vivienda
ADD COLUMN direccion VARCHAR(200), -- Dirección de la vivienda
ADD COLUMN telefono_convencional VARCHAR(20), -- Teléfono convencional
ADD COLUMN emergencia_nombres VARCHAR(100), -- Nombres del contacto de emergencia
ADD COLUMN emergencia_parentesco VARCHAR(50), -- Parentesco del contacto de emergencia
ADD COLUMN emergencia_telefono VARCHAR(20), -- Teléfono del contacto de emergencia
ADD COLUMN cedula_estudiante VARCHAR(20), -- Cédula del estudiante
ADD COLUMN provincia_nacimiento VARCHAR(100), -- Provincia de nacimiento
ADD COLUMN direccion_trabajo_padre VARCHAR(200), -- Dirección del trabajo del padre
ADD COLUMN vive_con_estudiante_padre BOOLEAN DEFAULT FALSE, -- Vive con el estudiante
ADD COLUMN es_representante_padre BOOLEAN DEFAULT FALSE, -- Es representante del estudiante
ADD COLUMN telefono_emergencia VARCHAR(20), -- Teléfono del contacto de emergencia
ADD COLUMN nacionalidad_padre VARCHAR(50), -- Nacionalidad del padre
ADD COLUMN padre_celular VARCHAR(20), -- Número celular del padre,
ADD COLUMN madre_nombres VARCHAR(100), -- Apellidos y nombres de la madre
ADD COLUMN madre_cedula VARCHAR(20), -- Cédula de la madre
ADD COLUMN madre_telefono VARCHAR(20), -- Teléfono convencional de la madre
ADD COLUMN madre_celular VARCHAR(20), -- Número celular de la madre
ADD COLUMN madre_profesion VARCHAR(100), -- Profesión de la madre
ADD COLUMN madre_email VARCHAR(100), -- Email de la madre
ADD COLUMN direccion_trabajo_madre VARCHAR(200), -- Dirección del trabajo de la madre
ADD COLUMN vive_con_estudiante_madre BOOLEAN DEFAULT FALSE, -- Vive con el estudiante
ADD COLUMN es_representante_madre BOOLEAN DEFAULT FALSE, -- Es representante del estudiante
ADD COLUMN nacionalidad_madre VARCHAR(50), -- Nacionalidad de la madre
ADD COLUMN representante_nombres VARCHAR(100), -- Apellidos y nombres del representante
ADD COLUMN representante_cedula VARCHAR(20), -- Cédula del representante
ADD COLUMN representante_telefono VARCHAR(20), -- Teléfono convencional del representante
ADD COLUMN representante_celular VARCHAR(20), -- Número celular del representante
ADD COLUMN representante_profesion VARCHAR(100), -- Profesión del representante
ADD COLUMN representante_email VARCHAR(100), -- Email del representante
ADD COLUMN direccion_trabajo_representante VARCHAR(200), -- Dirección del trabajo del representante
ADD COLUMN vive_con_estudiante_representante BOOLEAN DEFAULT FALSE, -- Vive con el estudiante
ADD COLUMN es_representante_representante BOOLEAN DEFAULT FALSE, -- Es representante del estudiante
ADD COLUMN nacionalidad_representante VARCHAR(50), -- Nacionalidad del representante
ADD COLUMN verificado BOOLEAN DEFAULT FALSE; -- Indica si la solicitud ha sido verificada
